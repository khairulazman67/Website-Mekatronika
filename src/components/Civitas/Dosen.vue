<template>
    <div>
        <div class="flex justify-start mb-6">
            <div class="relative w-1/4">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input v-model="search" type="search" id="default-search"
                    class="block w-full p-4 pl-10 text-sm  text-gray-700 border border-gray-800 rounded-lg bg-gray-50 focus:ring-primary-700 focus:border-primary-800"
                    placeholder="Search" required>
                <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
            </div>
        </div>
        <div>
            <div class="grid grid-cols-4 gap-5">
                <div v-for="(v,i) in data" :key="i" class=" h-full rounded-2xl shadow-xl">
                    <div class="rounded-xl bg-gray-600">
                        <img :src="myImageSource(data[0].foto)" class="w-full rounded-xl h-72" alt="">
                    </div>
                    <div class="text-center py-5">
                        <div class="font-semibold text-2xl">
                            <router-link :to="{name: 'lecturedetail', params:{title:'Dosen Detail',id:data[0].id}}">
                                <p class="font-black text-xl mb-2">{{v.nama}}</p>
                            </router-link>

                        </div>
                        <div class=" text-lg">NIP. {{v.NIP}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pagination -->
        <nav class="mt-10 flex justify-center">
            <ul class="inline-flex -space-x-px">
                <li>
                    <a href="#" @click="setPagination(0)"
                        class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                            class="fa-solid fa-angles-left"></i></a>
                </li>
                <li>
                    <a href="#" @click="setPagination('-')"
                        class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i
                            class="fa-solid fa-angle-left"></i> </a>
                </li>
                <li v-for="(v,i) in pagination.page" :key="i">
                    <a href="#" @click="setPagination(i)" class="px-3 py-2"
                        :class="[pagination.pageNow ==i? 'text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700' : 'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700']">{{i+1}}</a>
                </li>
                <li>
                    <a href="#" @click="setPagination('+')"
                        class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                            class="fa-solid fa-angle-right"></i></a>
                </li>
                <li>
                    <a href="#" @click="setPagination(pagination.page-1)"
                        class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                            class="fa-solid fa-angles-right"></i></a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                data: {},
                search: '',
                pagination: {
                    total: null,
                    page: 1,
                    pageNow: 0,
                    limit: 8,
                    offset: 0
                }
            }
        },
        watch: {
            search: function () {
                this.getData(this.search)
            }
        },
        methods: {
            async getData(search) {
                await axios
                    .get(`lectures/`, {
                        params: {
                            search,
                            offset: this.pagination.offset,
                            limit: this.pagination.limit
                        }
                    })
                    .then(r => {
                        this.data = r.data.data
                        this.pagination.total = r.data.total
                        this.pagination.page = Math.ceil(this.pagination.total / this.pagination.limit)
                    }).catch(e => {
                        console.dir(e);
                    });
            },

            async setPagination(page) {
                if (page == '+') {
                    if (this.pagination.pageNow < this.pagination.page - 1)
                        this.pagination.pageNow = this.pagination.pageNow + 1
                } else if (page == '-') {
                    if (this.pagination.pageNow - 1 >= 0)
                        this.pagination.pageNow = this.pagination.pageNow - 1
                } else {
                    this.pagination.pageNow = await page
                }
                this.pagination.offset = await this.pagination.pageNow * this.pagination.limit

                this.getData('', await this.pagination.offset)
            },
            myImageSource(data) {
                console.log('data', data);
                return data !== 'localhost:3000/null' ? `http://` + data : '/Images/pnl4.png';
            }

        },
        mounted() {
            this.getData()
        }
    }
</script>
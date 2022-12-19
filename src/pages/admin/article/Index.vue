<template>
    <div class="h-screen py-5 px-5 ">
        <div class="flex h-full flex-row ">
            <aside :class="showMenu ? 'flex' : 'hidden mx-0'"
                class="h-full  mx-2 xs:px-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-800 ">
                <Sidebar></Sidebar>
            </aside>
            <main class="h-full ml-3 xs:ml-0 xs:mr-0 mr-2 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-800 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white xs:text-lg text-2xl font-bold flex flex-row">
                        <button @click="toggleNav()">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="ml-3 ">Posting</div>
                    </div>
                </div>
                <div
                    class="w-full h-full flex flex-row xs:flex-col  gap-4 rounded-3xl  overflow-hidden overflow-y-auto ">
                    <div class="flex flex-col  w-full xs:w-full rounded-t-3xl">
                        <div class="flex flex-col">
                            <div>
                                <div
                                    class="bg-primary-800 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">
                                    </div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div
                                        class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div
                                            class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">
                                            Data Postingan</div>
                                            
                                        <div class="w-full bg-white rounded-3xl mt-5 p-5">
                                            <router-link :to="{name:'formposting',params:{id:'create'}}" class="mt-4">
                                                <button type="submit"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Posting
                                                </button>
                                            </router-link>

                                            <div class="mt-5 ">
                                                <div class="flex justify-start">
                                                    <div class="relative w-1/4">
                                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                        </div>
                                                        <input @change="searchData" v-model="search" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  text-gray-700 border border-gray-800 rounded-lg bg-gray-50 focus:ring-primary-700 focus:border-primary-800" placeholder="Search" required>
                                                        <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
                                                    </div>
                                                </div>
                                                <div class="overflow-x-auto mt-4">
                                                    <table
                                                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                        <thead
                                                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" class="py-3 px-6">
                                                                    No
                                                                </th>
                                                                <th scope="col" class="py-3 px-6">
                                                                    judul
                                                                </th>
                                                                <th scope="col" class="py-3 px-6">
                                                                    Kategori
                                                                </th>
                                                                <th scope="col" class="py-3 px-6">
                                                                    Ringkasan
                                                                </th>
                                                                 <th scope="col" class="py-3 px-6">
                                                                    Tanggal
                                                                </th>
                                                                <th scope="col" class="py-3 px-6">
                                                                    Aksi
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(v,i) in data" :key="i"
                                                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {{i+1}}
                                                                </th>
                                                                <td class="py-4 px-6">
                                                                    {{v.judul}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    {{v.kategori_id}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    {{v.ringkasan}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    {{moment(v.updatedAt).format('DD MMMM YYYY')}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    <div
                                                                        class="flex flex-row justify-center">
                                                                        <router-link :to="{name:'formposting',params:{id:v.id}}">
                                                                            <button type="submit"
                                                                                class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-5 rounded-xl ml-2"><i
                                                                                    class="fa-solid fa-pen-to-square"></i>
                                                                            </button>
                                                                        </router-link>
                                                                        <button  @click="deleteContent(v.id)"
                                                                            class="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-5 rounded-xl ml-2">
                                                                            <i
                                                                                class="fa-solid fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            <!-- pagination -->
                                                <nav class="mt-5 flex justify-center">
                                                    <ul class="inline-flex -space-x-px">
                                                        <li>
                                                            <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" aria-current="page" class="px-3 py-2 text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../../components/Sidebar.vue'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import Swal from 'sweetalert2'
    var moment = require('moment');
    import axios from 'axios';

    export default {
        components: {
            Sidebar
        },



        data() {
            return {
                showMenu: true,
                data: 0,
                moment: moment,
                search:''
            }
        },
        
        methods: {
            toggleNav() {
                this.showMenu = this.showMenu === false ? true : false
            },
            async getData(data) {
                console.log('masok')
                await axios
                    .get(`contents/`, {params:{search:data}})
                    .then(r => {
                        this.data = r.data.data
                        console.log('data ini bro',this.data);
                    }).catch(e => {
                        console.dir(e);
                    });
            },
            async searchData() {
                console.log('ini konten', this.search);
                await this.getData(this.search)
                console.log('masok')
            },
            deleteContent(id){
                console.log('id', id)
                Swal.fire({
                    title: `Apakah anda yakin untuk menghapus data ini?`,
                    showCancelButton: true,
                    confirmButtonText: 'Hapus',
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios
                            .delete(`contents/${id}`)
                            .then(r => {
                                console.log(r)
                                if (r.data.status === 'success') {
                                    console.log(r)
                                    Swal.fire(
                                        'Berhasil!',
                                        'Data ketegori berhasil disimpan!',
                                        'success'
                                    )
                                    this.getData()
                                }
                            })
                            .catch(e => {
                                Swal.fire(
                                    'Gagal!',
                                    'Terjadi kesalahan saat proses update data',
                                    'error'
                                );
                                console.dir(e);
                            });
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                    }
                })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>
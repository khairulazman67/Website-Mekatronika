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

                                            <div class="mt-5">
                                                <div class="overflow-x-auto ">
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
            }
        },
        methods: {
            toggleNav() {
                this.showMenu = this.showMenu === false ? true : false
            },
            async getData() {
                await axios
                    .get(`contents`)
                    .then(r => {
                        this.data = r.data.data
                        console.log(this.data);
                    }).catch(e => {
                        console.dir(e);
                    });
            },
            getContent() {
                console.log('ini konten', this.content);
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
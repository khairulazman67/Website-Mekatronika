<template>
    <div class="h-screen py-5 px-5 ">
        <div class="flex justify-center">
            <div v-show="isOpen" class="absolute inset-1 flex items-center justify-center bg-gray-700 bg-opacity-50">
                <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                    <div class="flex items-center justify-between">
                        <h3 class="text-2xl font-semibold">Edit Data</h3>
                        <svg @click="isOpen = false" xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-red-900 cursor-pointer" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="mt-4 w-96">
                        <form action="" @submit.prevent="" class="mt-4">
                            <div class="mb-4">
                                <label
                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                    for="username">
                                    judul :
                                </label>
                                <input
                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" v-model="judul" name="judul"
                                    placeholder="judul">
                            </div>
                            <div class="mb-6">
                                <label
                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                    for="password">
                                    url :
                                </label>
                                <input
                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" v-model="url" name="url"
                                    placeholder="url">
                            </div>

                            <div class="flex flex-row justify-end">
                                <button type="submit" @click="addOrUpdate(2)"
                                    class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>

                                <button @click="isOpen = false"
                                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex h-full flex-row ">
            <aside :class="showMenu ? 'flex' : 'hidden mx-0'"
                class="h-full  mx-2 xs:px-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-800 ">
                <Sidebar></Sidebar>
            </aside>
            <main class="ml-3 xs:ml-0 xs:mr-0 mr-2 w-full rounded-3xl  flex flex-col h-screen">
                <div class="w-full py-3  bg-primary-800 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white xs:text-lg text-2xl font-bold flex flex-row">
                        <button @click="toggleNav()">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="ml-3 ">Survei </div>
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
                                <div class="flex flex-row bg-red rounded-b-3xl shadow-lg py-2 ">
                                    <div
                                        class="flex flex-col bg-gray-100 rounded-2xl w-1/2 mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div
                                            class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">
                                            Form Survei</div>
                                        <div>
                                            <form action="" @submit.prevent="addOrUpdate(1)" class="mt-4">
                                                <div class="mb-4">
                                                    <label
                                                        class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                                        for="username">
                                                        judul :
                                                    </label>
                                                    <input
                                                        class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text" v-model="judul" name="judul"
                                                        placeholder="judul">
                                                </div>
                                                <div class="mb-6">
                                                    <label
                                                        class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                                        for="password">
                                                        url :
                                                    </label>
                                                    <input
                                                        class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text" v-model="url" name="url"
                                                        placeholder="url">
                                                </div>

                                                <div class="flex flex-row justify-end">
                                                    <button type="submit"
                                                        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col  bg-gray-100 rounded-2xl w-1/2 mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="py-1 ">
                                            <div
                                                class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">
                                                Data judul
                                            </div>
                                            <div class="mt-3">
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
                                                                    url
                                                                </th>
                                                                <th scope="col" class="py-3 px-6">
                                                                    Aksi
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(v,i) in dataSurvei" :key="i"
                                                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row"
                                                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {{i+1}}
                                                                </th>
                                                                <td class="py-4 px-6">
                                                                    {{v.judul}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    {{v.url}}
                                                                </td>
                                                                <td class="py-4 px-6">
                                                                    <div class="flex flex-row justify-center">
                                                                        <button type="submit" @click="editData(v.judul, v.url, v.id)" 
                                                                            class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-5 rounded-xl ml-2"><i
                                                                                class="fa-solid fa-pen-to-square"></i></button>

                                                                        <button @click="deleteData(v.id)"
                                                                            class="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-5 rounded-xl ml-2">
                                                                            <i class="fa-solid fa-trash"></i>
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
    import Sidebar from '../../components/Sidebar.vue'
    import {
        reactive,
        toRefs,
        onMounted
    } from 'vue'
    import Swal from 'sweetalert2'
    import axios from 'axios'
    export default {
        components: {
            Sidebar
        },
        setup() {
            const toggle = reactive({
                showMenu: true,
                isOpen: false
            });
            const data = reactive({
                dataSurvei: [],
            })
            //get data judul
            const getCategoriesData = async () => {
                await axios.get(`surveys`)
                    .then(r => {
                        data.dataSurvei = r.data.data;
                        console.log(data.dataSurvei);
                    })
                    .catch(e => {
                        console.dir(e);
                    });
            }
            onMounted(() => {
                getCategoriesData()
            })

            const toggleNav = () => {
                toggle.showMenu = toggle.showMenu === false ? true : false
            }


            //form judul
            const form = reactive({
                judul: '',
                url: '',
                id :null
            })

            const addOrUpdate = (flag) => {
                const data = {
                    'judul': form.judul,
                    'url': form.url
                }
                console.log('data', data)
                if(flag==1){
                    axios
                        .post(`categories`, data)
                        .then(r => {
                            if (r.data.status === 'success') {
                                Swal.fire(
                                    'Berhasil!',
                                    'Data ketegori berhasil disimpan!',
                                    'success'
                                )
                                getCategoriesData()
                                form.judul = null
                                form.url = null
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
                }else{
                    axios
                        .put(`surveys/${form.id}`, data)
                        .then(r => {
                            if (r.data.status === 'success') {
                                Swal.fire(
                                    'Berhasil!',
                                    'Data ketegori berhasil disimpan!',
                                    'success'
                                )
                                getCategoriesData()
                                form.judul = null
                                form.url = null
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
                }
            }

            const deleteData = (id) => {
                console.log('id', id)
                Swal.fire({
                    title: `Apakah anda yakin untuk menghapus data ini?`,
                    showCancelButton: true,
                    confirmButtonText: 'Hapus',
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios
                            .delete(`surveys/${id}`)
                            .then(r => {
                                console.log(r)
                                if (r.data.status === 'success') {
                                    console.log(r)
                                    Swal.fire(
                                        'Berhasil!',
                                        'Data survei dihapus',
                                        'success'
                                    )
                                    getCategoriesData()
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

            const editData = (judul, url,id) =>{
                form.judul = judul
                form.url = url
                form.id = id
                toggle.isOpen = true
            }

            return {
                ...toRefs(toggle),
                toggleNav,
                ...toRefs(form),
                ...toRefs(data),
                addOrUpdate,
                deleteData,
                editData
            }
        }
    }
</script>
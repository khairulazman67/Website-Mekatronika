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
                        <div class="ml-3 ">Kategori</div>
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
                                <div class="flex flex-row bg-white rounded-b-3xl shadow-lg py-2">
                                    <div
                                        class="flex flex-col bg-gray-100 rounded-2xl w-1/2 mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div
                                            class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">
                                            Form Kategori</div>
                                        <div>
                                            <form action="" class="mt-4">
                                                <div class="mb-4">
                                                    <label
                                                        class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                                        for="username">
                                                        Kategori :
                                                    </label>
                                                    <input
                                                        class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text" placeholder="Kategori">
                                                </div>
                                                <div class="mb-6">
                                                    <label
                                                        class="block text-gray-700 text-lg font-bold mb-2 xs:text-base"
                                                        for="password">
                                                        Keterangan :
                                                    </label>
                                                    <input
                                                        class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text" placeholder="Keterangan">
                                                </div>

                                                <div class="flex flex-row justify-end">
                                                    <!-- <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-5 rounded-xl">Batal</button> -->
                                                    <button
                                                        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col bg-gray-100 rounded-2xl w-1/2 mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div
                                            class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">
                                            Data Kategori</div>
                                        <div>

                                            <div class="overflow-x-auto relative">
                                                <table
                                                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                    <thead
                                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                        <tr>
                                                            <th scope="col" class="py-3 px-6">
                                                                No
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Kategori
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Keterangan
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Aksi
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row"
                                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Apple MacBook Pro 17"
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                Sliver
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                Laptop
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                $2999
                                                            </td>
                                                        </tr>
                                                        <tr
                                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row"
                                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Microsoft Surface Pro
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                White
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                Laptop PC
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                $1999
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white dark:bg-gray-800">
                                                            <th scope="row"
                                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Magic Mouse 2
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                Black
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                Accessories
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                $99
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
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/Sidebar.vue'
    export default {
        components: {
            Sidebar
        },
        data() {
            return {
                showMenu: true,
            }
        },
        methods: {
            toggleNav() {
                this.showMenu = this.showMenu === false ? true : false
            },
        },
        mounted() {

        }
    }
</script>
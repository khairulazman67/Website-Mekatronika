
<template>
    <div class="fixed z-10 w-full  ">
        <div class="h-3 bg-yellow-900"></div>
        <nav class="flex items-center  justify-between flex-wrap bg-primary-800 px-11 py-4">
            <div>
                <div class="flex items-center flex-no-shrink text-white mr-6">
                    <img src="../assets/Images/Logo.png" class="w-60 " alt="">
                </div>
            </div>
            <div>
                <div class="block sm:hidden">
                    <button @click="toggle"
                        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div :class="open ? 'block': 'hidden'" class="w-full flex-grow  sm:flex sm:items-center sm:w-auto">
                    <div class="sm:flex-grow text-xl uppercase text-white">
                        <router-link :to="{name:'home', params:{}}"
                            class="no-underline px-2 font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-yellow-700 mr-4">
                            Beranda
                        </router-link>
                        <router-link :to="{name:'profil', params:{}}"
                            class="no-underline px-2 font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-yellow-700 mr-4">
                            Profil
                        </router-link>
                        <router-link :to="{name:'dokumen', params:{}}"
                            class="no-underline px-2 font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-yellow-700 mr-4">
                            Dokumen
                        </router-link>
                        <div class="dropdown px-2 inline-block relative">
                            <button
                                class=" text-white font-extrabold py-2 px-4 rounded hover:text-yellow-700 inline-flex items-center uppercase">
                                <span class="mr-1">Berita </span>
                                <i class="fa-solid dropdown-plus  fa-plus"></i>
                                <i class="fa-solid dropdown-menu hidden fa-minus"></i>
                            </button>
                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-full  ">
                                <router-link :to="{name: 'berita', params:{kategori:'1' , title:'Berita'}}">
                                    <a class="bg-white text-xs font-bold hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                    href="#">Berita</a>
                                </router-link>
                                <router-link :to="{name:'berita', params:{kategori:'2', title:'Pengumuman'}}">
                                    <a class="bg-white text-xs font-bold hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                    href="#">Pengumuman</a>
                                </router-link>
                            </ul>
                        </div>
                        <div class="dropdown px-2 inline-block relative">
                            <button
                                class=" text-white font-extrabold py-2 px-4 rounded hover:text-yellow-700 inline-flex items-center uppercase">
                                <span class="mr-1">Akademik </span>
                                <i class="fa-solid dropdown-plus  fa-plus"></i>
                                <i class="fa-solid dropdown-menu hidden fa-minus"></i>
                            </button>
                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-full  ">
                                <router-link :to="{name:'civitas', params:{}}">
                                    <a class="bg-white text-xs font-bold hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                    href="#">Civitas</a>
                                </router-link>
                                <li class=""><a class="bg-white text-xs font-bold hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                        href="#">Fasilitas</a></li>
                            </ul>
                        </div>
                        <a href="#responsive-header"
                            class="no-underline px-2 font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-yellow-900 mr-4">
                            Kegiatan
                        </a>
                        <div class="dropdown px-2 inline-block relative">
                            <button
                                class=" text-white font-extrabold py-2 px-4 rounded hover:text-yellow-900 inline-flex items-center uppercase">
                                <span class="mr-1">Survei </span>
                                <i class="fa-solid dropdown-plus  fa-plus"></i>
                                <i class="fa-solid dropdown-menu hidden fa-minus"></i>
                            </button>
                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-full  ">
                                <li class=""><a
                                        class="rounded-t bg-white text-xs font-bold  hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                        href="#">Survei Prodi</a></li>
                                <li class=""><a class="bg-white text-xs font-bold hover:bg-yellow-800 py-2 px-4 block whitespace-no-wrap"
                                        href="#">Hasil Survei</a></li>
                            </ul>
                        </div>
                        <router-link :to="{name:'kontak', params:{}}"
                            class="no-underline px-2 font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-yellow-700 mr-4">
                            Kontak
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
            }
        },
        methods: {
            toggle() {
                this.open = !this.open
            }
        }
    }
</script>
<style >
    .dropdown:hover .dropdown-menu {
        display: block;
    }
    .dropdown:hover .dropdown-plus {
        display: none;
    }
</style>
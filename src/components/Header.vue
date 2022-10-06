<template>
    <div class="fixed z-10 w-full  ">
        <div class="h-3 bg-yellow-900"></div>
        <nav class="flex items-center  justify-between flex-wrap bg-red-900 px-6 py-4">
            <div>
                <div class="flex items-center flex-no-shrink text-white mr-6">
                    <img src="../assets/Images/Logo.png" class="w-72 " alt="">
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
                <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                    <div class="sm:flex-grow text-xl text-white">
                        <router-link :to="{name:'Home', params:{}}"
                            class="no-underline  font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Beranda
                        </router-link>
                        <router-link :to="{name:'Profil', params:{}}"
                            class="no-underline  font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Profil
                        </router-link>
                        <router-link :to="{name:'Dokumen', params:{}}"
                            class="no-underline  font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Dokumen
                        </router-link>
                        <a href="#responsive-header"
                            class="no-underline font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Berita
                        </a>
                        <a href="#responsive-header"
                            class="no-underline font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Kegiatan
                        </a>
                        <a href="#responsive-header"
                            class="no-underline font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                            Survei
                        </a>
                        <a href="#responsive-header"
                            class="no-underline font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200">
                            Kontak
                        </a>
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
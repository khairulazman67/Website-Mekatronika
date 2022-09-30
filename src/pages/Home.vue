<template>
  <div class="font-sans antialiased" id="app">
    <div class="relative">
      <div class="absolute w-full">
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
                <a href="#responsive-header"
                  class="no-underline  font-extrabold  block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                  Beranda
                </a>
                <a href="#responsive-header"
                  class="no-underline font-extrabold block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-gray-200 mr-4">
                  Dokumen
                </a>
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
      <div class="w-full rounded-b-xl h-auto ">
        <div class="flex justify-center items-center">
          <img src="../assets/Images/Home/pnl2.png" class="w-full rounded-b-[20px]" alt="">
          <div class="absolute text-2xl flex flex-col justify-center items-center text-white top-auto ">
            <!-- <div class=""> -->
              <div class="font-extrabold text-6xl">Politeknik Negeri Lhokseumawe</div>
              <div class="font-extrabold text-7xl mt-3">Teknologi Rekayasa Mekatronika</div>
              <div class="py-3 px-4 mt-4 rounded-2xl font-extrabold text-black bg-yellow-900 hover:bg-yellow-800">Selengkapnya...</div>
            <!-- </div> -->
          </div>

          <div class="absolute flex flex-row gap-7 justify-center -bottom-32">
            <img src="../assets/Images/Home/card_red.png" alt="">
            <img src="../assets/Images/Home/card_green.png" alt="">
            <img src="../assets/Images/Home/card_yellow.png" alt="">
            <img src="../assets/Images/Home/card_red.png" alt="">
            <!-- <div class="h-32 w-32 bg-primary-700 rounded-2xl"></div>
            <div class="h-32 w-32 bg-primary-700 rounded-2xl"></div>
            <div class="h-32 w-32 bg-primary-700 rounded-2xl"></div>
            <div class="h-32 w-32 bg-primary-700 rounded-2xl"></div> -->
          </div>  
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="mt-32 flex flex-row">
        <div>
          <img src="../assets/Images/Home/illus.png" alt="">
        </div>
        <div class="flex flex-col">
          <div class="font-bold text-2xl">Tentang Kami</div>
        </div>
        
      </div>
    </div>
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
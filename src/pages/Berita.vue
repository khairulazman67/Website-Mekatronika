<template>
  <div v-if="isloaded" class="font-sans antialiased" id="app">
    <div class="relative">
      <Header />
      <div class="w-full rounded-b-xl h-auto ">
        <div class="flex justify-center items-center">
          <img src="../assets/Images/bg_header.png" class="w-full rounded-b-[20px]" alt="">
          <div class="absolute text-2xl mt-24 flex flex-col justify-center items-center text-white top-auto ">
            <!-- <div class=""> -->
            <div class="font-extrabold text-5xl">PROFIL</div>
            <div class="font-extrabold text-1xl mt-3 flex flex-row uppercase">
              <router-link :to="{name: 'home', params:{}}" class="hover:text-gray-300">
                    BERANDA
              </router-link>
              // {{this.title}} 
                
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="pt-20 bg-gray-100">
      <div class="container m-auto ">
      </div>
      <div class="w-full rounded-xl h-full flex flex-col gap-5">
        <div class=" shadow-lg py-6 text-primary-800 rounded-xl font-bold text-center text-xl bg-white uppercase">{{this.title}} 
        </div>
        <div class="h-2 w-full rounded-xl bg-primary-800 "></div>
        <div class="bg-gray-200 p-5 rounded-xl px-20">
          <div class="grid grid-cols-3 gap-7">
            <div v-for="(v,i) in data" :key="i">
              <router-link :to="{name: 'contentdetail', params:{title:'Pengumuman',id:v.id}}">
                <div class="shadow-lg rounded-xl bg-white">
                  <div class="">
                    <img :src="myImageSource(v.foto)" class="w-full h-full rounded-xl" alt="">
                  </div>
                  <div class="w-full flex flex-col p-6">
                    <p class="font-black text-xl mb-2">{{v.judul}}</p>
                    <p class="text-justify">{{v.ringkasan}}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <nav class="mt-5 flex justify-center">
            <ul class="inline-flex -space-x-px">
              <li>
                <a @click="setPagination(0)"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i
                    class="fa-solid fa-angles-left"></i></a>
              </li>
              <li>
                <a @click="setPagination('-')"
                  class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                  <i class="fa-solid fa-angle-left"></i> </a>
              </li>
              <li v-for="(v,i) in pagination.page" :key="i">
                  <a href="#" @click="setPagination(i)" class="px-3 py-2"
                      :class="[pagination.pageNow ==i? 'text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700' : 'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700']">{{i+1}}</a>
              </li>
              <li>
                <a @click="setPagination('+')"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                    class="fa-solid fa-angle-right"></i></a>
              </li>
              <li>
                <a @click="setPagination(pagination.page-1)"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                    class="fa-solid fa-angles-right"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import axios from 'axios';
  export default {
    data() {
      return {
        isloaded:false,
        data : null,
        pagination: {
          total: null,
          page: 1,
          pageNow: 0,
          limit: 4,
          offset: 0
        },
      }
    },
    components: {
      Header,
      Footer
    },
    props: {
      kategori: String,
      title : String
    },
    methods: {
      toggle() {
        this.open = !this.open
      },

      myImageSource(data) {
        console.log('data', data);
        return data !== 'localhost:3000/null' ? `http://` + data : '/Images/pnl4.png';
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

      async getData() {
        await axios
          .get(`contents/`, {
            params: {
              offset: this.pagination.offset,
              limit: this.pagination.limit,
              kategori: this.kategori
            }
          })
          .then(r => {
            this.data = r.data.data
            console.log("ini data bro", this.data)
            this.pagination.total = r.data.total
            this.pagination.page = Math.ceil(this.pagination.total / this.pagination.limit)
          }).catch(e => {
            console.dir(e);
          });
      },
    },
    async mounted() {

      await this.getData()
      

      this.isloaded = true
      
      console.log('ini props',this.kategori)
    }
  }
</script>
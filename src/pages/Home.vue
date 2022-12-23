<template>
  <div v-if="isloaded" class="font-sans antialiased" id="app">
    <div class="relative">
      <Header />
      <div class="w-full rounded-b-xl h-auto ">
        <div class="flex justify-center items-center">
          <img src="../assets/Images/Home/pnl2.png" class="w-full rounded-b-[20px]" alt="">
          <div class="absolute text-2xl flex flex-col justify-center items-center text-white top-auto ">
            <!-- <div class=""> -->
            <div class="font-bold text-6xl">Program Studi</div>
            <div class="font-bold text-7xl mt-3">Teknologi Rekayasa Mekatronika</div>
            <div class="py-3 px-4 mt-4 rounded-2xl font-semibold text-black bg-yellow-900 hover:bg-yellow-800">
              Selengkapnya...</div>
            <!-- </div> -->
          </div>

          <div class="absolute flex flex-row gap-7 justify-center -bottom-32">
            <!-- <div class="relative">
              <img src="../assets/Images/Home/card_red.png" alt="">
              <div class="absolute text-2xl flex flex-col justify-center items-center">
                dsakjd,nas
              </div>
            </div> -->
            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_red.png" class="w-full rounded-xl" alt="">
              <div class="absolute m-6 text-2xl flex flex-col text-primary-800  hover:text-primary-700 justify-center items-center top-auto ">
                <i class="fa-solid fa-building-columns text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Tentang Prodi</div>
              </div>
            </div>

            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_green.png" class="w-full rounded-xl" alt="">
              <div class="absolute m-6 text-2xl flex flex-col text-secondary-900  hover:text-secondary-800 justify-center items-center top-auto ">
                <i class="fa-solid fa-book-open-reader text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Visi dan Misi</div>
              </div>
            </div>
            
            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_yellow.png" class="w-full rounded-xl" alt="">
              <div class="absolute m-6 text-2xl flex flex-col text-yellow-900  hover:text-yellow-800 justify-center items-center top-auto ">
                <i class="fa-solid fa-person-chalkboard text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Dosen</div>
              </div>
            </div>
            
            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_red.png" class="w-full rounded-xl" alt="">
              <div class="absolute m-6 text-2xl flex flex-col text-primary-800  hover:text-primary-700 justify-center items-center top-auto ">
                <i class="fa-solid fa-graduation-cap text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">CPL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto ">
      <!-- tentang kami -->
      <div class="mt-36 flex flex-row mx-16">
        <div class="w-1/2">
          <img src="../assets/Images/Home/illus.png" alt="">
        </div>
        <div class="flex flex-col w-1/2">
          <div class="font-extrabold text-2xl">TENTANG KAMI</div>
          <div class="flex flex-row w-full mt-5">
            <div class="flex items-center">
              <img src="../assets/Images/Home/icon_red.png" alt="">
            </div>
            <div class="w-full ml-3 flex flex-col">
              <div class="text-xl font-bold mt-3">Lorem Ibsum</div>
              <div class="text-justify text-lg">
                Nulla anim nisi Lorem eiusmod ea magna consequat dolore excepteur est. Nostrud deserunt duis labore sit
                elit laborum. Nostrud eu amet deserunt aliquip eiusmod dolor et.
                Cupidatat amet nulla dolor
              </div>
            </div>
          </div>
          <div class="flex flex-row w-full mt-4">
            <div class="flex items-center">
              <img src="../assets/Images/Home/icon_yellow.png" alt="">
            </div>
            <div class="w-full ml-3 flex flex-col">
              <div class="text-xl font-bold mt-3">Lorem Ibsum</div>
              <div class="text-justify text-lg">
                Nulla anim nisi Lorem eiusmod ea magna consequat dolore excepteur est. Nostrud deserunt duis labore sit
                elit laborum. Nostrud eu amet deserunt aliquip eiusmod dolor et.
                Cupidatat amet nulla dolor
              </div>
            </div>
          </div>
          <div class="flex flex-row w-full mt-4">
            <div class="flex items-center">
              <img src="../assets/Images/Home/icon_green.png" alt="">
            </div>
            <div class="w-full ml-3 flex flex-col">
              <div class="text-xl font-bold mt-3">Lorem Ibsum</div>
              <div class="text-justify text-lg">
                Nulla anim nisi Lorem eiusmod ea magna consequat dolore excepteur est. Nostrud deserunt duis labore sit
                elit laborum. Nostrud eu amet deserunt aliquip eiusmod dolor et.
                Cupidatat amet nulla dolor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- video -->
    <div class="w-full">
      <img src="../assets/Images/Home/pnl3.png" class="w-full" alt="">
    </div>
    <div class="pt-12 bg-gray-50">
      <div class="container mx-auto h-auto">
        <!-- lasted post -->

        <div class="flex flex-row w-full h-auto gap-8 ">
          <div class="w-1/2 h-full bg-gray-300 rounded-xl shadow-xl shadow-gray-900 outline-1">
            <div class="flex flex-col p-5 gap-5">
              <div class="p-3 text-primary-800 bg-white rounded-xl font-bold text-center text-xl ">BERITA TERBARU
              </div>
              <div class="h-2 w-full rounded-xl bg-primary-800 "></div>

              <div v-if="data[0]" class="flex flex-row shadow-lg rounded-xl bg-white">
                <div class="w-2/5">
                  <img :src="myImageSource(data[0].foto)" class="w-full h-full rounded-l-xl" alt="">
                </div>
                <div class="w-3/5 flex flex-col p-6">
                  <p class="font-black text-xl mb-2">{{data[0].judul}}</p>
                  <p class="text-justify">{{data[0].ringkasan}}</p>
                </div>
              </div>

              <div class="flex flex-row gap-5">
                <div   class="w-full rounded-xl h-auto ">
                  <div v-if="data[1]" class="relative  flex justify-center items-center">
                    <div class="w-full bg-black rounded-xl">
                      <img :src="myImageSource(data[1].foto)" class="w-full rounded-xl opacity-50" alt="">
                    </div>
                    <div class="absolute m-6 text-2xl flex flex-col justify-center items-center text-white top-auto ">
                      <!-- <div class=""> -->
                      <div class="font-extrabold text-xl text-center hover:text-gray-300">{{data[1].judul}}</div>
                      <div class=" text-lg text-center mt-3 ">
                        {{data[1].ringkasan}}
                      </div>
                      <!-- </div> -->
                    </div>

                  </div>
                </div>
                <div  class="w-full rounded-xl h-auto ">
                  <div v-if="data[2]" class="relative  flex justify-center items-center">
                    <div class="w-full bg-black rounded-xl">
                      <img :src="myImageSource(data[2].foto)" class="w-full rounded-xl opacity-50" alt="">
                    </div>
                    <div class="absolute m-6 text-2xl flex flex-col justify-center items-center text-white top-auto ">
                      <!-- <div class=""> -->
                      <div class="font-extrabold text-xl text-center hover:text-gray-300">{{data[2].judul}}</div>
                      <div class=" text-lg text-center mt-3 ">
                        {{data[2].ringkasan}}
                      </div>
                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="data[3]" class="flex flex-row shadow-lg rounded-xl bg-white">
                <div class="w-3/5 flex flex-col p-6">
                  <p class="font-black text-xl mb-2">{{data[3].judul}}</p>
                  <p class="text-justify">{{data[3].ringkasan}}</p>
                </div>
                <div class="w-2/5">
                  <img  :src="myImageSource(data[3].foto)" class="w-full h-full rounded-r-xl">
                </div>
              </div>

              <nav class="mt-5 flex justify-center">
                  <ul class="inline-flex -space-x-px">
                      <li>
                          <a @click="setPagination(0)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angles-left"></i></a>
                      </li>
                      <li>
                          <a @click="setPagination('-')" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angle-left"></i> </a>
                      </li>
                      <li v-for="(v,i) in pagination.page" :key="i">
                          <a @click="setPagination(i)"  class="px-3 py-2" :class="[pagination.pageNow ==i? 'text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700' : 'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700']">{{i+1}}</a>
                      </li>
                      <li>
                          <a @click="setPagination('+')" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angle-right"></i></a>
                      </li>
                      <li>
                          <a @click="setPagination(pagination.page-1)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angles-right"></i></a>
                      </li>
                  </ul>
              </nav>
            </div>
          </div>
          <div class="w-1/2 rounded-xl h-full flex flex-col gap-5">
            <div class=" shadow-lg py-6 text-primary-800 rounded-xl font-bold text-center text-xl bg-white">PENGUMUMAN
              KEDUA</div>
            <div class="h-2 w-full rounded-xl bg-primary-800 "></div>
            <div class="bg-gray-200 p-5 rounded-xl">
              <div class="flex my-5 flex-row shadow-lg rounded-xl bg-white">
                <div class="w-2/5">
                  <img src="../assets/Images/Home/pnl4.png" class="w-full h-full rounded-l-xl" alt="">
                </div>
                <div class="w-3/5 flex flex-col p-6">
                  <p class="font-black text-xl mb-2">Lorem Ibsum</p>
                  <p class="text-justify">Nostrud esse veniam consectetur cillum commodo. Ullamco ex elit dolor commodo
                    ullamco irure eu magna. Laborum dolor do velit nulla. Qui do aute elit pariatur pariatur aute elit
                    duis ut. Est dolore deserunt irure amet deserunt fugiat ex consectetur qui esse commodo cupidatat
                    cillum incididunt. Veniam tempor qui nulla irure ullamco laborum.</p>
                </div>
              </div>

              <div class="flex my-5 flex-row shadow-lg rounded-xl bg-white">
                <div class="w-2/5">
                  <img src="../assets/Images/Home/pnl4.png" class="w-full h-full rounded-l-xl" alt="">
                </div>
                <div class="w-3/5 flex flex-col p-6">
                  <p class="font-black text-xl mb-2">Lorem Ibsum</p>
                  <p class="text-justify">Nostrud esse veniam consectetur cillum commodo. Ullamco ex elit dolor commodo
                    ullamco irure eu magna. Laborum dolor do velit nulla. Qui do aute elit pariatur pariatur aute elit
                    duis ut. Est dolore deserunt irure amet deserunt fugiat ex consectetur qui esse commodo cupidatat
                    cillum incididunt. Veniam tempor qui nulla irure ullamco laborum.</p>
                </div>
              </div>

              <div class="flex my-5 flex-row shadow-lg rounded-xl bg-white">
                <div class="w-2/5">
                  <img src="../assets/Images/Home/pnl4.png" class="w-full h-full rounded-l-xl" alt="">
                </div>
                <div class="w-3/5 flex flex-col p-6">
                  <p class="font-black text-xl mb-2">Lorem Ibsum</p>
                  <p class="text-justify">Nostrud esse veniam consectetur cillum commodo. Ullamco ex elit dolor commodo
                    ullamco irure eu magna. Laborum dolor do velit nulla. Qui do aute elit pariatur pariatur aute elit
                    duis ut. Est dolore deserunt irure amet deserunt fugiat ex consectetur qui esse commodo cupidatat
                    cillum incididunt. Veniam tempor qui nulla irure ullamco laborum.</p>
                </div>
              </div>
              <nav class="mt-5 flex justify-center">
                  <ul class="inline-flex -space-x-px">
                      <li>
                          <a  @click="setPagination(0)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angles-left"></i></a>
                      </li>
                      <li>
                          <a   @click="setPagination('-')" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angle-left"></i> </a>
                      </li>
                      <li v-for="(v,i) in pagination.page" :key="i">
                          <a  @click="setPagination(i)"  class="px-3 py-2  text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700">dsa</a>
                      </li>
                      <li>
                          <a  @click="setPagination('+')" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angle-right"></i></a>
                      </li>
                      <li>
                          <a  @click="setPagination(pagination.page-1)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i class="fa-solid fa-angles-right"></i></a>
                      </li>
                  </ul>
              </nav>
            </div>
          </div>
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
        isloaded : false,
        open: false,
        pagination :{
            total : null,
            page :1,
            pageNow : 0,
            limit : 4,
            offset : 0
        },
        data :null
      }
    },
    components: {
      Header,
      Footer
    },
    methods: {
      toggle() {
        this.open = !this.open
      },

      myImageSource(data){
        console.log('data',data);
        return data!=='localhost:3000/null' ? `http://`+data : '/Images/Home/pnl4.png';
      },
      async setPagination(page){
          if(page=='+'){
              if(this.pagination.pageNow<this.pagination.page-1)
                  this.pagination.pageNow = this.pagination.pageNow+1
          }else if(page=='-' ){
              if(this.pagination.pageNow-1>=0)
                  this.pagination.pageNow = this.pagination.pageNow-1
          }else{
              this.pagination.pageNow = await page
          }
          this.pagination.offset=await this.pagination.pageNow*this.pagination.limit
          
          this.getData('',await this.pagination.offset)
      },

      async getData() {
        await axios
            .get(`contents/`, {params:{offset:this.pagination.offset,limit:this.pagination.limit,kategori:1}})
            .then(r => {
                console.log(r.data.da)
                this.data = r.data.data
                this.pagination.total = r.data.total
                this.pagination.page = Math.ceil(this.pagination.total/this.pagination.limit)
            }).catch(e => {
                console.dir(e);
            });
      },
    },
    async mounted() {
      await this.getData()
      this.isloaded=true
      console.log(this.data[0])
    }
  }
</script>
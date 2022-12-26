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
              <div
                class="absolute m-6 text-2xl flex flex-col text-primary-800  hover:text-primary-700 justify-center items-center top-auto ">
                <i class="fa-solid fa-building-columns text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Tentang Prodi</div>
              </div>
            </div>

            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_green.png" class="w-full rounded-xl" alt="">
              <div
                class="absolute m-6 text-2xl flex flex-col text-secondary-900  hover:text-secondary-800 justify-center items-center top-auto ">
                <i class="fa-solid fa-book-open-reader text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Visi dan Misi</div>
              </div>
            </div>

            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_yellow.png" class="w-full rounded-xl" alt="">
              <div
                class="absolute m-6 text-2xl flex flex-col text-yellow-900  hover:text-yellow-800 justify-center items-center top-auto ">
                <i class="fa-solid fa-person-chalkboard text-8xl"></i>
                <div class="font-bold text-2xl text-center  mt-6">Dosen</div>
              </div>
            </div>

            <div class="relative flex justify-center items-center ">
              <img src="../assets/Images/Home/card_red.png" class="w-full rounded-xl" alt="">
              <div
                class="absolute m-6 text-2xl flex flex-col text-primary-800  hover:text-primary-700 justify-center items-center top-auto ">
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
        <div class="flex flex-col  w-1/2">
            <div class="font-extrabold text-2xl">TENTANG KAMI</div>
            <div class="mt-5 text-xl">
              {{form.ringkasan}}
            </div>
              <router-link :to="{name: 'contentcat', params:{title:'sejarah',kategori:'9'}}">
                <div class="flex flex-col ">
                  <div
                    class="py-3 px-4 mt-4 w-44 text-center rounded-2xl font-semibold text-white bg-yellow-900 hover:text-black hover:bg-yellow-800">
                    Selengkapnya...</div>
                </div>
              </router-link>


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
                  <router-link :to="{name: 'contentdetail', params:{title:'Artikel',id:data[0].id}}">
                    <p class="font-black text-xl mb-2">{{data[0].judul}}</p>
                  </router-link>
                  <p class="text-justify">{{data[0].ringkasan}}</p>
                </div>
              </div>

              <div class="flex flex-row gap-5">
                <div class="w-full rounded-xl h-auto ">
                  <div v-if="data[1]" class="relative  flex justify-center items-center">
                    <div class="w-full bg-black rounded-xl">
                      <img :src="myImageSource(data[1].foto)" class="w-full rounded-xl opacity-50" alt="">
                    </div>
                    <div class="absolute m-6 text-2xl flex flex-col justify-center items-center text-white top-auto ">
                      <!-- <div class=""> -->
                      <router-link :to="{name: 'contentdetail', params:{title:'Artikel',id:data[1].id}}">
                        <div class="font-extrabold text-xl text-center hover:text-gray-300">{{data[1].judul}}</div>
                      </router-link>
                      <div class=" text-lg text-center mt-3 ">
                        {{data[1].ringkasan}}
                      </div>
                      <!-- </div> -->
                    </div>

                  </div>
                </div>
                <div class="w-full rounded-xl h-auto ">
                  <div v-if="data[2]" class="relative  flex justify-center items-center">
                    <div class="w-full bg-black rounded-xl">
                      <img :src="myImageSource(data[2].foto)" class="w-full rounded-xl opacity-50" alt="">
                    </div>
                    <div class="absolute m-6 text-2xl flex flex-col justify-center items-center text-white top-auto ">
                      <!-- <div class=""> -->
                      <router-link :to="{name: 'contentdetail', params:{title:'Artikel',id:data[2].id}}">
                        <div class="font-extrabold text-xl text-center hover:text-gray-300">{{data[2].judul}}</div>
                      </router-link>
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
                  <router-link :to="{name: 'contentdetail', params:{title:'Artikel',id:data[3].id}}">
                    <p class="font-black text-xl mb-2">{{data[3].judul}}</p>
                  </router-link>
                  <p class="text-justify">{{data[3].ringkasan}}</p>
                </div>
                <div class="w-2/5">
                  <img :src="myImageSource(data[3].foto)" class="w-full h-full rounded-r-xl">
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
                      class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i
                        class="fa-solid fa-angle-left"></i> </a>
                  </li>
                  <li v-for="(v,i) in pagination.page" :key="i">
                    <a @click="setPagination(i)" class="px-3 py-2"
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
          <div class="w-1/2 rounded-xl h-full flex flex-col gap-5">
            <div class=" shadow-lg py-6 text-primary-800 rounded-xl font-bold text-center text-xl bg-white">PENGUMUMAN
            </div>
            <div class="h-2 w-full rounded-xl bg-primary-800 "></div>
            <div class="bg-gray-200 p-5 rounded-xl">
              <div v-for="(v,i) in data2" :key="i" >
                <router-link :to="{name: 'contentdetail', params:{title:'Pengumuman',id:v.id}}">
                  <div class="flex my-5 flex-row shadow-lg rounded-xl bg-white">
                    <div class="w-2/5">
                      <img :src="myImageSource(v.foto)" class="w-full h-full rounded-l-xl" alt="">
                    </div>
                    <div class="w-3/5 flex flex-col p-6">
                      <p class="font-black text-xl mb-2">{{v.judul}}</p>
                      <p class="text-justify">{{v.ringkasan}}</p>
                    </div>
                  </div>
                </router-link>
              </div>
              <nav class="mt-5 flex justify-center">
                <ul class="inline-flex -space-x-px">
                  <li>
                    <a @click="setPagination2(0)"
                      class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i
                        class="fa-solid fa-angles-left"></i></a>
                  </li>
                  <li>
                    <a @click="setPagination2('-')"
                      class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i
                        class="fa-solid fa-angle-left"></i> </a>
                  </li>
                  <li v-for="(v,i) in pagination2.page" :key="i">
                    <a @click="setPagination2(i)"
                      class="px-3 py-2  text-primary-800 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-primary-700">{{i+1}}</a>
                  </li>
                  <li>
                    <a @click="setPagination2('+')"
                      class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                        class="fa-solid fa-angle-right"></i></a>
                  </li>
                  <li>
                    <a @click="setPagination2(pagination.page-1)"
                      class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i
                        class="fa-solid fa-angles-right"></i></a>
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
  // import { QuillEditor } from '@vueup/vue-quill'
  export default {
    data() {
      return {
        isloaded: false,
        open: false,
        pagination: {
          total: null,
          page: 1,
          pageNow: 0,
          limit: 4,
          offset: 0
        },
        pagination2: {
          total: null,
          page: 1,
          pageNow: 0,
          limit: 3,
          offset: 0
        },
        form: {
          // isi :{"ops":[{"insert":"Lorem ipsum dolor sit amet"},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]},
          ringkasan: null
        },
        data: null,
        data2: null
      }
    },
    components: {
      // QuillEditor,
      Header,
      Footer
    },
    methods: {
      toggle() {
        this.open = !this.open
      },

      async getContent(offset, limit, kategori) {

        const hasil = await axios.get(`contents/`, {
          params: {
            offset: offset,
            limit: limit,
            kategori: kategori
          }
        })
        return hasil.data.data
      },
      
      async getDataSejarah() {
        const resGetContent = await this.getContent(0, 1, 9)
        this.form.ringkasan = resGetContent[0].ringkasan
        console.log('data', this.form.ringkasan)
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

      async setPagination2(page) {
        if (page == '+') {
          if (this.pagination2.pageNow < this.pagination2.page - 1)
            this.pagination2.pageNow = this.pagination2.pageNow + 1
        } else if (page == '-') {
          if (this.pagination2.pageNow - 1 >= 0)
            this.pagination2.pageNow = this.pagination2.pageNow - 1
        } else {
          this.pagination2.pageNow = await page
        }
        this.pagination2.offset = await this.pagination2.pageNow * this.pagination2.limit

        this.getData('', await this.pagination.offset)
      },

      async getData() {
        await axios
          .get(`contents/`, {
            params: {
              offset: this.pagination.offset,
              limit: this.pagination.limit,
              kategori: 1
            }
          })
          .then(r => {
            this.data = r.data.data
            this.pagination.total = r.data.total
            this.pagination.page = Math.ceil(this.pagination.total / this.pagination.limit)
            console.log('pagination 1 page ', this.pagination.total)
          }).catch(e => {
            console.dir(e);
          });
      },

      async getData2() {
        await axios
          .get(`contents/`, {
            params: {
              offset: this.pagination2.offset,
              limit: this.pagination2.limit,
              kategori: 7
            }
          })
          .then(r => {
            console.log('data 2 bro', r.data.data)
            this.data2 = r.data.data
            this.pagination2.total = r.data.total
            this.pagination2.page = Math.ceil(this.pagination2.total / this.pagination2.limit)
            console.log('pagination 2 page ', this.pagination2.total)
          }).catch(e => {
            console.dir(e);
          });
      },
    },
    async mounted() {
      await this.getData()
      await this.getData2()
      await this.getDataSejarah()
      this.isloaded = true
      console.log(this.data[0])
    }
  }
</script>
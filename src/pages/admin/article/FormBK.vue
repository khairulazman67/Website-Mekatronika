<template>
    
    <div class="h-screen py-5 px-5 ">
        <div class="flex h-full flex-row ">
            <aside :class="showMenu ? 'flex' : 'hidden mx-0'" class="h-full  mx-2 xs:px-2 w-40 flex items-center flex-col justify-center rounded-3xl bg-primary-800 ">
                <Sidebar></Sidebar>
            </aside>
            <main class="h-full ml-3 xs:ml-0 xs:mr-0 mr-2 w-full rounded-3xl  flex flex-col">
                <div class="w-full py-3  bg-primary-800 mb-5 rounded-3xl flex items-center pl-5">
                    <div class="text-white xs:text-lg text-2xl font-bold flex flex-row" >
                        <button  @click="toggleNav()" >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div  class="ml-3 ">Posting</div>
                    </div>
                </div>
                <div class="w-full h-full flex flex-row xs:flex-col  gap-4 rounded-3xl  overflow-hidden overflow-y-auto ">
                    <div class="flex flex-col  w-full xs:w-full rounded-t-3xl">
                        <div class="flex flex-col">
                            <div>
                                <div class="bg-primary-800 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg"></div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">Tambahkan Postingan</div>
                                        <div class="w-full bg-white rounded-3xl mt-5 p-5">
                                            <div class="mb-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Judul :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.judul" name="kategori"
                                                    placeholder="Kategori">
                                            </div>
                                            <label class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">Kategori</label>
                                            <select id="countries" v-model="form.kategori_id" class=" mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                                <option v-for="(v,i) in categories" :key="i" :value="v.id">{{v.kategori}}</option>
                                            </select>
                                            <!-- <QuillEditor theme="snow"/> -->
                                            <QuillEditor v-model:content="form.isi" :options="editorOption" toolbar="#my-toolbar" ref="myQuillEditor" >
                                             <!-- <QuillEditor v-model:content="content" theme="snow" toolbar="#custom-toolbar"> -->
                                                <template #toolbar >
                                                    <div id="my-toolbar">
                                                        <!-- Add buttons as you would before -->
                                                        <select class="ql-size">
                                                            <option value="small"></option>
                                                            <option selected></option>
                                                            <option value="large"></option>
                                                            <option value="huge"></option>
                                                        </select>
                                                        <select class="ql-header">
                                                            <option :value="1"></option>
                                                            <option :value="2"></option>
                                                            <option :value="3"></option>
                                                            <option :value="4"></option>
                                                            <option :value="5"></option>
                                                            <option :value="6"></option>
                                                            <option selected></option>
                                                        </select>
                                                        <button class="ql-bold"></button>
                                                        <button class="ql-italic"></button>
                                                        <button class="ql-underline"></button>
                                                        <button class="ql-strike"></button>
                                                        <button class="ql-script" value="sub"></button>
                                                        <button class="ql-script" value="super"></button>
                                                        <select class="ql-align">
                                                            <option selected></option>
                                                            <option value="center"></option>
                                                            <option value="right"></option>
                                                            <option value="justify"></option>
                                                        </select>
                                                        <button class="ql-list" value="ordered"></button>
                                                        <button class="ql-list" value="bullet"></button>
                                                        <button class="ql-blockquote"></button>
                                                        <button class="ql-code-block"></button>
                                                        <button class="ql-link"></button>
                                                        <button class="ql-image"></button>

                                                        <!-- But you can also add your own -->
                                                    </div>
                                                </template>
                                            </QuillEditor>
                                            <div class="mt-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Ringkasan :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.ringkasan"
                                                    placeholder="Ringkasan">
                                            </div>
                                            <div class="flex fex-col justify-end">
                                                <button type="submit" @click="createContent"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
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
import { QuillEditor } from '@vueup/vue-quill'
import Swal from 'sweetalert2'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
export default {
    components: {
        Sidebar,
        QuillEditor
    },
    data() {
        return {
            showMenu : true,
            // data :0,
            form :{
                judul :"tes",
                kategori_id : 1,
                isi :{"ops":[{"insert":"Lorem ipsum dolor sit amet"},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]},
                ringkasan :"tes",
                foto :"tes"
            },
            editorOption: {
                // debug: 'info',
                placeholder: 'Type your post...',
                readOnly: false,
                theme: 'snow'
            },
            categories : null,
            
        }
    },
    props: ['id'],
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
        },
        async getData(){
            await axios
                .get(`categories`)
                .then(r => {
                    this.categories = r.data.data
                }).catch(e => {
                    console.dir(e);
                });
        },
        async createContent(){
            console.log('ini konten', this.form);
            const data = {
                'judul': await this.form.judul,
                'isi': `${JSON.stringify(await this.form.isi)}`,
                'kategori_id': await this.form.kategori_id,
                'ringkasan' :  await this.form.ringkasan,
                'foto' : await this.form.foto,
            }
            console.log(data)
            const input = await axios
                .post(`contents`, data)
                .then(r => {
                    if (r.data.status === 'success') {
                        Swal.fire(
                            'Berhasil!',
                            'Data ketegori berhasil disimpan!',
                            'success'
                        )
                    }
                })
                .catch(e => {
                    Swal.fire(
                        'Gagal!',
                        `Terjadi kesalahan </br> ${e.response.data.message}`,
                        'error'
                    );
                    console.log(e.response.data.message);
                });
            if(input){
                console.log('masok')
            }else{
                console.log('gagal')
            }
        },
        async getContent(id){
            await axios
                .get(`contents/${id}`)
                .then(r => {
                    this.form.judul = r.data.data.judul
                    this.form.isi = JSON.parse(r.data.data.isi)
                    this.form.kategori_id = r.data.data.kategori_id
                    this.form.foto = r.data.data.foto
                    // this.categories = r.data.data 
                    console.log('fdsadsa sdaorm bro',this.form)
                }).catch(e => {
                    console.dir(e);
                });
        }

    },
    async created(){
        if(this.$props.id!=='create'){
            await this.getContent(this.$props.id);
        }
    },
    async mounted(){  
        await this.getData()
         console.log('form bro',await this.form.isi)
        // console.log('props',this.$props.id)
        
        
    }
}
</script>

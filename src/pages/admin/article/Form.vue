<template>
    
    <div v-if="isloaded" class="h-screen py-5 px-5 ">
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
                                            <div class="mb-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Thumbnail :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="file" @change="updateFoto" name="kategori"
                                                    placeholder="Kategori">
                                                
                                                <img v-if="form.foto!==null" :src="`http://`+form.foto" class="w-1/2 mt-2">
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
                                                <button v-if="props.id=='create'" type="submit" @click="createContent"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                <button v-else type="submit" @click="updateContent"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Perbaharui</button>
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
import {
        reactive,
        toRefs,
        onMounted
    } from 'vue'
import Swal from 'sweetalert2'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


import axios from 'axios';
export default {
    components: {
        Sidebar,
        QuillEditor
    },
    props: ['id'],
    setup(props){
        const toggle = reactive({
            showMenu: true,
            isOpen: false
        });
        const toggleNav = () => {
            toggle.showMenu = toggle.showMenu === false ? true : false
        }

        const data = reactive({
            isloaded : false,
            form :{
                foto2 : "../../../assets/Images/Home/card_red.png",
                judul :"tes",
                kategori_id : 1,
                // isi :{"ops":[{"insert":"Lorem ipsum dolor sit amet"},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]},
                isi : '',
                ringkasan :"tes",
                foto :"tes"
            },
            editorOption: {
                // debug: 'info',
                placeholder: 'Type your post...',
                readOnly: false,
                theme: 'snow',
                modules: {
                    table: true
                }
            },
            categories : null
        })

    // proses get 
        // get categories
        const getCategories = async()=>{
             await axios
                .get(`categories`)
                .then(r => {
                    data.categories = r.data.data
                }).catch(e => {
                    console.dir(e);
                });
        }
    // get contents
        const getContent = async ()=>{
            const send = await axios.get(`contents/${props.id}`)
            return send.data.data
        }

        const getData = async ()=>{
            const resGetContent = await getContent()
            console.log('dasdyuah',resGetContent)
            
            data.form.judul = await resGetContent.judul
            data.form.isi = await JSON.parse(resGetContent.isi)
            data.form.kategori_id = await resGetContent.kategori_id
            data.form.ringkasan = await resGetContent.ringkasan
            data.form.foto = await resGetContent.foto
            console.log(data.form.isi)
        }
        
        onMounted(async () => {
            if(props.id!=='create'){
                console.log(props.id)
                await getData();
            }
            await getCategories()
            data.isloaded=true
            
        })

        const updateFoto = async(e)=>{
            
            let file = await e.target.files[0];
            console.log(file)
            let reader = new FileReader();
            reader.onloadend =  function(){
                console.log('RESULT' ,reader.result)
                data.form.foto = reader.result
            }
            const tes = reader.readAsDataURL(file)
            console.log('ini tes', tes)
        }

    // proses create
        const createContent = async()=>{
            
            const dataSave = {
                'judul': await data.form.judul,
                'isi': `${JSON.stringify(await data.form.isi)}`,
                'kategori_id': await data.form.kategori_id,
                'ringkasan' :  await data.form.ringkasan,
                'foto' : await data.form.foto,
            }
            console.log(dataSave)
            const input = await axios
                .post(`contents`, dataSave)
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
                    console.log(e);
                });
            if(input){
                console.log('masok')
            }else{
                console.log('gagal')
            }
        }

        const updateContent = async()=>{
            
            const dataSave = {
                'judul': await data.form.judul,
                'isi': `${JSON.stringify(await data.form.isi)}`,
                'kategori_id': await data.form.kategori_id,
                'ringkasan' :  await data.form.ringkasan,
                'foto' : await data.form.foto,
            }
            console.log(dataSave)
            const input = await axios
                .put(`contents/${props.id}`, dataSave)
                .then(r => {
                    if (r.data.status === 'success') {
                        Swal.fire(
                            'Berhasil!',
                            'Data berhasil diupdate!',
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
                    console.log(e);
                });
            if(input){
                console.log('masok')
            }else{
                console.log('gagal')
            }
        }

        return {
            ...toRefs(toggle),
            toggleNav,
            ...toRefs(data),
            updateFoto,
            createContent,
            props,
            updateContent
        }
    }
}
</script>

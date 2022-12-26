<template>
    <div v-if="isloaded" class="font-sans antialiased" id="app">
        <div class="relative">
            <Header />

            <div class="w-full rounded-b-xl h-auto ">
                <div class="flex justify-center items-center">
                    <img src="../assets/Images/bg_header.png" class="w-full rounded-b-[20px]" alt="">
                    <div class="absolute text-2xl mt-24 flex flex-col uppercase justify-center items-center text-white top-auto ">
                        <!-- <div class=""> -->
                        <div class="font-extrabold text-5xl ">{{props.title}}</div>
                        <div class="font-extrabold text-1xl mt-3">
                            <router-link :to="{name: 'home', params:{}}" class="hover:text-gray-300">
                                    BERANDA
                            </router-link>
                            // {{props.title}} 
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-20 bg-gray-100">
            <div class="container m-auto ">
                <div class="h-screen bg-white w-full  rounded-lg overflow-auto">
                    <div class="m-10">
                        <div class="w-full flex flex-row justify-center">
                            <div class="flex flex-col justify-center items-center ">
                                <div class="font-bold text-2xl uppercase">{{form.judul}}</div>
                                <img v-if="form.foto" :src="`http://`+form.foto" class="w-1/2 mt-5 ">
                            </div>
                        </div>
                        
                        <QuillEditor v-model:content="form.isi" :options="editorOption" toolbar="#my-toolbar" ref="myQuillEditor" >
                            <template #toolbar >
                                <div id="my-toolbar">
                                    
                                </div>
                            </template>
                        </QuillEditor>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>
<script >
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue'
    import { QuillEditor } from '@vueup/vue-quill'

    import axios from 'axios'
    import {reactive,toRefs, onMounted} from 'vue'
    export default {
        props :['kategori','title','id'],
        components: {
            Header,
            Footer,
            QuillEditor
        },
        setup(props){
            let data = reactive({
                flag : null,
                isloaded :false,

                form :{
                    // isi :{"ops":[{"insert":"Lorem ipsum dolor sit amet"},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]},
                    isi : null,
                    judul:null,
                    foto:null
                },
                editorOption: {
                    // debug: 'info',
                    placeholder: 'Type your post...',
                    readOnly: true,
                    theme: 'snow',
                    modules: {
                        table: true
                    }
                },
            })

            const getDataContent= async() =>{
                const resGetContent = await axios.get(`contents/${props.id}`)
                data.form.isi = JSON.parse(resGetContent.data.data.isi)
                data.form.judul = resGetContent.data.data.judul
                if(resGetContent.data.data.foto.slice(-4)!=='null'){
                    console.log('masok')
                    data.form.foto = resGetContent.data.data.foto
                }   
                   
            
                console.log('foto',data.form.foto)
                

            }
            
            const getDataByCat= async() =>{
                const resGetContent = await axios.get(`contents/`, {
                params: {
                    offset: 0,
                    limit: 1,
                    kategori: props.kategori
                }
                })
                data.form.isi = JSON.parse(resGetContent.data.data[0].isi)
                data.form.judul = resGetContent.data.data[0].judul
            }

            onMounted(async () => {
                if(props.kategori)
                    await getDataByCat()
                else{
                     await getDataContent()
                }
                data.isloaded=true    
                console.log('props',props)
                
            })      
 
            return {
                ...toRefs(data),
                props, 
            }
        }
    }
</script>
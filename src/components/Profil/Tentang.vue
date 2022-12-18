<template>
    <div v-if="isloaded">
        <div class="font-bold text-2xl">
            Profil Prodi TRM
        </div>

        <QuillEditor v-model:content="form.isi" :options="editorOption" toolbar="#my-toolbar" ref="myQuillEditor" >
            <!-- <QuillEditor v-model:content="content" theme="snow" toolbar="#custom-toolbar"> -->
            <template #toolbar >
                <div id="my-toolbar">
                    
                    <!-- But you can also add your own -->
                </div>
            </template>
        </QuillEditor>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {reactive,toRefs,onMounted} from 'vue'
import axios from 'axios'
export default {
    components: {
        QuillEditor
    },
    setup(){

        const data = reactive({
            isloaded : false,
            form :{
                // isi :{"ops":[{"insert":"Lorem ipsum dolor sit amet"},{"attributes":{"header":3},"insert":"\n"},{"insert":"consectetur adipiscing elit. "},{"attributes":{"bold":true},"insert":"Nunc ultrices ligula"},{"insert":" eu eros pulvinar, eu consequat nulla consectetur. Cras ut purus felis. Nunc placerat risus a augue sodales, at ultricies diam tristique. Donec venenatis auctor mauris,"},{"attributes":{"italic":true},"insert":" at molestie enim euismo"},{"insert":"d ac. Mauris viverra, leo id porttitor maximus, diam magna blandit nibh, ac vehicula nulla diam in eros. Nullam mi risus, blandit a elit quis, aliquam porttitor diam. In mauris nunc, fringilla at auctor in, sodales eu diam. In convallis gravida urna, ut gravida massa euismod quis.\nProin rutrum tortor at augue eleifend finibus. "},{"attributes":{"underline":true},"insert":"Quisque non tincidunt dolor."},{"insert":" Aenean ullamcorper, diam ac vehicula imperdiet, arcu erat sodales sem, vitae lobortis dolor urna dapibus nisi. Nulla lacus urna, vehicula quis rutrum sit amet, "},{"attributes":{"link":"http://localhost"},"insert":"porttitor eget ligula"},{"insert":". Nam eget ante ornare, egestas nulla dapibus, tempus nisi. Sed vel odio augue. Fusce vulputate, risus sit amet venenatis tristique, ex ex pulvinar orci, vitae lobortis massa enim ac ante. Nulla sodales mauris ligula, a tempus felis vulputate ut. Sed scelerisque dolor at leo hendrerit vehicula.\n"}]},
                isi : null
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
            categories : null
            
        })

        const getContent=async(id) =>{
            const hasil = await axios.get(`contents/categories/${id}`)
            return hasil.data.data
        }

        const getData = async ()=>{
            const resGetContent = await getContent(1)
            
            data.form.isi = JSON.parse(resGetContent.isi)

            console.log(data.form.isi)
        }
        
        
        onMounted(async () => {
            await getData()
            data.isloaded=true
            
        })  
        return {...toRefs(data)}
    }
}
</script>
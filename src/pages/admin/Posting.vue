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
                                <div class="bg-primary-800 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">JADWAL PEMBERIAN PAKAN</div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">Form Pemberian Pakan</div>
                                        <div class="w-full bg-white rounded-3xl mt-5 p-5">
                                            <!-- <QuillEditor theme="snow"/> -->
                                            <QuillEditor theme="snow" toolbar="#my-toolbar">
                                                <template #toolbar>
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
                                                        <button id="custom-button" >Save</button>
                                                    </div>
                                                </template>
                                            </QuillEditor>
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
import Sidebar from '../../components/Sidebar.vue'
import { QuillEditor } from '@vueup/vue-quill'
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
            data :0
        }
    },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
        },
        getData(){
            axios
                .get(`surveys`)
                .then(r => {
                    console.log(r);
                }).catch(e => {
                    console.dir(e);
                });
        }
    },
    mounted(){
        this.getData()
    }
}
</script>
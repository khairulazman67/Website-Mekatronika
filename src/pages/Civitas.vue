<template>
    <div class="font-sans antialiased" id="app">
        <div class="relative">
            <Header />

            <div class="w-full rounded-b-xl h-auto ">
                <div class="flex justify-center items-center">
                    <img src="../assets/Images/bg_header.png" class="w-full rounded-b-[20px]" alt="">
                    <div class="absolute text-2xl mt-24 flex flex-col justify-center items-center text-white top-auto ">
                        <!-- <div class=""> -->
                        <div class="font-extrabold text-5xl">PROFIL</div>
                        <div class="font-extrabold text-1xl mt-3">BERANDA // PROFIL</div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-20 bg-gray-100">
            <div class="container m-auto ">
                <div class="h-screen bg-white w-full  rounded-lg overflow-auto">
                    <div class="w-full h-14 text-lg  flex flex-row">
                        <div class="flex flex-row w-full">
                            <div class="w-1/2">
                                <button :class="data.flag===7 ?'btn-primary' : 'btn'" @click="changeMenu(7)">Dosen</button>
                            </div>
                            <div class="w-1/2">
                                <button :class="data.flag===8 ?'btn-primary' : 'btn'" @click="changeMenu(8)">Mahasiswa</button>
                            </div>  
                        </div>
                    </div>
                    <div class="p-10">
                        <Dosen v-if="data.flag===7"/>
                        <Mhs v-if="data.flag===8"/>
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
    import Dosen from '../components/Civitas/Dosen.vue'
    import Mhs from '../components/Civitas/Mhs.vue'
    import axios from 'axios'
    import {reactive, onMounted} from 'vue'
    export default {
        setup(){
            let data = reactive({
                flag : null,
                isloaded :false
            })
            
            
            const changeMenu= async(id) =>{
                data.flag = id
                const content = await getContent(data.flag)
                console.log('ini konten bro',content)
            }
            
            const getContent=async(id) =>{
                return await axios.get(`contents/categories/${id}`)
            }
            onMounted(async () => {
                await changeMenu(7)
                data.isloaded=true
                
            })  

            return {data, changeMenu}
        },

        components: {
            Header,
            Footer,
            Dosen,
            Mhs
        
            

        },
        // data() {
        //     return {
        //         flag : 'visimisi',
        //     }
        // },
        // methods: {
        //     changeMenu(data){
        //         this.flag = data
        //         console.log(this.flag)
        //     }
        // }
    }
</script>
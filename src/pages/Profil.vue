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
                    <div class="w-full h-14 text-lg  flex flex-rowu">
                        <!-- <div class="border border-black h-full"></div> -->
                        <div class="w-1/2">
                            <button :class="data.flag===1 ?'btn-primary' : 'btn'" @click="changeMenu(1)">Tentang</button>
                            <button :class="data.flag===2?'btn-primary' : 'btn'" @click="changeMenu(2)">Visi Misi</button>
                            <button :class="data.flag===3 ?'btn-primary' : 'btn'" @click="changeMenu(3)">Tujuan</button>
                            <button :class="data.flag===4 ?'btn-primary' : 'btn'" @click="changeMenu(3)">SK</button>
                        </div>
                        <div class="w-1/2">
                            <button :class="data.flag===5 ?'btn-primary' : 'btn'" @click="changeMenu(5)">Kurikulum</button>
                            <button :class="data.flag===6 ?'btn-primary' : 'btn'" @click="changeMenu(6)">CPL</button>
                            <button :class="data.flag===7 ?'btn-primary' : 'btn'" @click="changeMenu(7)">Dosen</button>
                            <button :class="data.flag===8 ?'btn-primary' : 'btn'" @click="changeMenu(8)">Mahasiswa</button>
                        </div>
                    </div>
                    <div class="p-10">
                        <Tentang v-if="data.flag===1"/>
                        <Visimisi v-if="data.flag===2"/>
                        <Tujuan v-if="data.flag===3"/>
                        <SK v-if="data.flag===4"/>
                        <Kurikulum v-if="data.flag===5"/>
                        <CPL v-if="data.flag===6"/>
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
    import Tentang from '../components/Profil/Tentang.vue'
    import Visimisi from '../components/Profil/Visimisi.vue'
    import Tujuan from '../components/Profil/Tujuan.vue'
    import SK from '../components/Profil/SK.vue'
    import Kurikulum from '../components/Profil/Kurikulum.vue'
    import CPL from '../components/Profil/CPL.vue'
    import Dosen from '../components/Profil/Dosen.vue'
    import Mhs from '../components/Profil/Mhs.vue'
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
                console.log('ini flag bro',data.flag)
                const content = await getContent(data.flag)
                console.log('ini konten bro',content)
            }
            
            const getContent=async(id) =>{
                return await axios.get(`contents/categories/${id}`)
            }
            onMounted(async () => {
                await changeMenu(1)
                data.isloaded=true
                
            })  

            return {data, changeMenu}
        },

        components: {
            Header,
            Footer,
            Tentang,
            Visimisi,
            Tujuan,
            SK,
            Kurikulum,
            CPL,
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
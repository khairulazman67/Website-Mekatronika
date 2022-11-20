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
                            <button :class="state.flag==='tentang' ?'btn-primary' : 'btn'" @click="changeMenu('tentang')">Tentang</button>
                            <button :class="state.flag==='visimisi'?'btn-primary' : 'btn'" @click="changeMenu('visimisi')">Visi Misi</button>
                            <button :class="state.flag==='tujuan' ?'btn-primary' : 'btn'" @click="changeMenu('tujuan')">Tujuan</button>
                            <button :class="state.flag==='SK' ?'btn-primary' : 'btn'" @click="changeMenu('SK')">SK</button>
                        </div>
                        <div class="w-1/2">
                            <button :class="state.flag==='kurikulum' ?'btn-primary' : 'btn'" @click="changeMenu('kurikulum')">Kurikulum</button>
                            <button :class="state.flag==='CPL' ?'btn-primary' : 'btn'" @click="changeMenu('CPL')">CPL</button>
                            <button :class="state.flag==='dosen' ?'btn-primary' : 'btn'" @click="changeMenu('dosen')">Dosen</button>
                            <button :class="state.flag==='mhs' ?'btn-primary' : 'btn'" @click="changeMenu('mhs')">Mahasiswa</button>
                        </div>
                    </div>
                    <div class="p-10">
                        <Tentang v-if="state.flag==='tentang'"/>
                        <Visimisi v-if="state.flag==='visimisi'"/>
                        <Tujuan v-if="state.flag==='tujuan'"/>
                        <SK v-if="state.flag==='SK'"/>
                        <Kurikulum v-if="state.flag==='kurikulum'"/>
                        <CPL v-if="state.flag==='CPL'"/>
                        <Dosen v-if="state.flag==='Dosen'"/>
                        <Mhs v-if="state.flag==='mhs'"/>
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
    import {reactive} from 'vue'
    export default {
        setup(){
            let state = reactive({
                flag:'visimisi'})
            
            const changeMenu= (data) =>{
                state.flag = data
                console.log('ini flag',state.flag)
            }

            return {state, changeMenu}
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
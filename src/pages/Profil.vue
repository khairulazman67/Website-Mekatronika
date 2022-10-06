<template>
    <div class="antialiased bg-gray-100" id="app">
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
        <div class="mt-20">
            <div class="container m-auto ">
                <div class="h-screen bg-white w-full  rounded-lg overflow-auto">
                    <div class="w-full h-10 text-lg">
                        <!-- <div class="border border-black h-full"></div> -->
                        <button class="btn-primary">Tentang Prodi</button>
                        <button class="btn-primary">Visi Misi</button>
                        <button class="btn-primary">Tujuan</button>
                        <button class="btn-primary">SK</button>
                        <button class="btn-primary">Kurikulum</button>
                        <button class="btn-primary">CPL</button>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Header from '../components/Header.vue';
    export default {
        data() {
            return {
                open: false,
            }
        },
        components: {
            Header,
        },
        methods: {
            toggle() {
                this.open = !this.open
            }
        }
    }
</script>
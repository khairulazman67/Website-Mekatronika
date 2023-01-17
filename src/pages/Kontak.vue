<template>
    <div  class="font-sans antialiased" id="app">
        <div class="relative">
            <Header />

            <div class="w-full rounded-b-xl h-auto ">
                <div class="flex justify-center items-center">
                    <img src="../assets/Images/bg_header.png" class="w-full rounded-b-[20px]" alt="">
                    <div
                        class="absolute text-2xl mt-24 flex flex-col uppercase justify-center items-center text-white top-auto ">
                        <!-- <div class=""> -->
                        <div class="font-extrabold text-5xl " v-if="isloaded">{{props.title}}</div>
                        <div class="font-extrabold text-1xl mt-3">
                            <router-link :to="{name: 'home', params:{}}" class="hover:text-gray-300">
                                BERANDA
                            </router-link>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-20 bg-gray-100">
            <div class="container m-auto w-full">
                <div class="relative">
                    <div class="h-auto flex p-20 flex-row gap-20 bg-white w-full rounded-lg">
                        <div class="flex flex-col w-2/5">
                            <div class="w-full flex flex-row p-10 gap-2 text-xl bg-yellow-600 rounded-lg">
                                <div class="bg-white rounded-full text-4xl p-4 border-4 border-yellow-800">
                                    <i class="fa-solid fa-house text-yellow-900"></i>
                                </div>
                                <div>
                                    <div class="text-gray-600 font-semibold">Alamat</div>
                                    <div class="font-bold mt-1">
                                        Gedung Lobi Lt.1 Sayap Kanan, Politeknik Negeri Lhokseumawe
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex flex-row mt-5 p-10 gap-2 text-xl bg-yellow-600 rounded-lg">
                                <div class="bg-white rounded-full text-4xl p-4 border-4 border-yellow-800">
                                    <i class="fa-solid fa-envelope text-yellow-900"></i>
                                </div>
                                <div>
                                    <div class="text-gray-600 font-semibold">Email</div>
                                    <div class="font-bold mt-1">
                                        mekatronika@pnl.ac.id
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex flex-row mt-5 p-10 gap-2 text-xl bg-yellow-600 rounded-lg">
                                <div class="bg-white rounded-full text-4xl p-4 border-4 border-yellow-800">
                                    <i class="fa-solid fa-phone-volume text-yellow-900"></i>
                                </div>
                                <div>
                                    <div class="text-gray-600 font-semibold">Telepon</div>
                                    <div class="font-bold mt-1">
                                        0813-7522-0509
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="flex flex-col w-3/5 justify-center bg-black">
                            
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
    import Footer from '../components/Footer.vue'

    export default {
        name: "LeafletMap",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                map: null,
            };
        },
        mounted() {
            
        },
    };
</script>

<style scoped>
    #mapContainer {
        width: 100vw;
        height: 100vh;
    }
</style>
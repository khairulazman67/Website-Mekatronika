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
                        <div  class="ml-3 ">Dashboard</div>
                    </div>
                </div>
                <div class="w-full h-full flex flex-row xs:flex-col  gap-4 rounded-3xl  overflow-hidden overflow-y-auto ">
                    <div class="flex flex-col  w-full xs:w-full rounded-t-3xl">
                        <div class="flex flex-col">
                            <div>
                                <div class="bg-primary-800 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg">DASHBOARD</div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">Form</div>
                                        
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
export default {
    components: {
        Sidebar
    },
    data() {
        return {
            showMenu : true,
        }
    },
    methods: {
        toggleNav(){
            this.showMenu = this.showMenu===false?true:false
        },
    },
    mounted(){

    }
}
</script>
<template>

    <div class="overflow-auto py-20 px-5">
        <router-link :to="{name: 'dashboardadmin', params:{}}">
            <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                <div
                    class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                    <i class="fa-solid fa-house text-xl xs:lg"></i>
                </div>
                <div class="text-white text-base xs:text-xs mt-1">Beranda</div>
            </div>
        </router-link>
        <router-link :to="{name: 'dataposting', params:{}}">
            <div class="mt-4">
                <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                    <div
                        class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                        <i class="fa-solid fa-gear text-xl"></i>
                    </div>
                    <div class="text-white text-base xs:text-xs mt-1">Posting</div>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'kategori', params:{}}" class="mt-4">
            <div class="mt-4">
                <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                    <div
                        class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                        <i class="fa-solid fa-gear text-xl"></i>
                    </div>
                    <div class="text-white text-base xs:text-xs mt-1">Kategori</div>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'survei', params:{}}" class="mt-4">
        <div class="mt-4">
            <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                <div
                    class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                    <i class="fa-solid fa-book text-xl"></i>
                </div>
                <div class="text-white text-base xs:text-xs mt-1">Survei</div>
            </div>
        </div>
         </router-link>
        <div class="mt-4">
            <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                <div
                    class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                    <i class="fa-solid fa-book text-xl"></i>
                </div>
                <div class="text-white text-base xs:text-xs mt-1">Dosen</div>
            </div>
        </div>
        <a href="#" class="mt-4" @click="signout">
            <div class="flex flex-col items-center text-secondary-900 hover:text-white ">
                <div
                    class="flex items-center justify-center h-16 w-16 xs:w-10 xs:h-10 xs:rounded-xl rounded-2xl bg-white hover:bg-secondary-900">
                    <i class="fa-solid fa-right-from-bracket text-xl"></i>
                </div>
                <div class="text-white text-base xs:text-xs mt-1">Logout</div>
            </div>
        </a>
    </div>

</template>

<script>
    // import axios from 'axios';
    export default {
        data() {
            return {
                // showMenuSini : true,
            }
        },
        methods: {
            // signout(){
            //     event.preventDefault();
            //     this.$store.dispatch('logout', {
            //         success: () => {
            //             this.$router.push({name: 'login', params: []});
            //         }
            //     });
            // },
            // async checklogged() {
            //     var user =  JSON.parse(localStorage.getItem('user'))
            //     if(!user){
            //         this.$router.push({name: 'login', params: []});
            //     }
            // },
        },
        mounted() {
            // this.checklogged()
        }
    }
</script>
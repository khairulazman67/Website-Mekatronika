<template>
    <div v-if="isloaded" class="font-sans antialiased" id="app">
        <div class="relative">
            <Header />

            <div class="w-full rounded-b-xl h-auto ">
                <div class="flex justify-center items-center">
                    <img src="../assets/Images/bg_header.png" class="w-full rounded-b-[20px]" alt="">
                    <div
                        class="absolute text-2xl mt-24 flex flex-col uppercase justify-center items-center text-white top-auto ">
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
            <div class="container m-auto w-full">
                <div class="h-auto flex p-20 flex-row gap-20 bg-white w-full rounded-lg">
                    <div class="flex flex-col w-2/5">
                        <div class="shadow-xl border-gray-100 border-2 rounded-xl p-7 text-center">
                            <div class="rounded-xl bg-gray-600">
                                <img :src="myImageSource(data.foto)" class="w-full rounded-xl h-72" alt="">
                            </div>
                            <div class="font-bold text-2xl mt-5">{{data.nama}}</div>
                            <div>Dosen/Staf Pengajar Prodi TRMM</div>
                        </div>
                    </div>
                    <div class="flex flex-col w-3/5 justify-center">
                        <div class="font-bold text-2xl mt-5">{{data.nama}}</div>
                        <div>Dosen/Staf Pengajar Prodi TRMM</div>
                        <div>
                            <div class="relative overflow-x-auto mt-4 sm:rounded-lg">
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <tbody>
                                        <tr class="border-b border-gray-200 ">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ">
                                                NIDN
                                            </th>
                                            <td class="px-6 py-4">
                                                : {{data.NIDN}}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200 ">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ">
                                                NIP
                                            </th>
                                            <td class="px-6 py-4">
                                                : {{data.NIP}}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                                                Email
                                            </th>
                                            <td class="px-6 py-4">
                                                : Black
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                                                Ringkasan
                                            </th>
                                            <td class="px-6 py-4">
                                                : {{data.ringkasan}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

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

    import axios from 'axios'
    import {
        reactive,
        toRefs,
        onMounted
    } from 'vue'
    export default {
        props: ['title', 'id'],
        components: {
            Header,
            Footer
        },
        setup(props) {
            let data = reactive({
                flag: null,
                isloaded: false,

                data: {},
            })

            const getDataContent = async () => {
                const resGetContent = await axios.get(`lectures/${props.id}`)
                data.data = resGetContent.data.data
            }

            const myImageSource = (data) => {
                console.log('data', data);
                return data !== 'localhost:3000/null' ? `http://` + data : '/Images/pnl4.png';
            }

            onMounted(async () => {
                await getDataContent()
                data.isloaded = true
                console.log('props', props)

            })

            return {
                myImageSource,
                ...toRefs(data),
                props,
            }
        }
    }
</script>
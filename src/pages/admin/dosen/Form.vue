<template>
    
    <div v-if="isloaded" class="h-screen py-5 px-5 ">
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
                                <div class="bg-primary-800 rounded-t-2xl px-10 text-center w-full text-white py-3 font-semibold text-2xl xs:text-lg"></div>
                                <div class=" bg-white rounded-b-3xl shadow-lg py-2">
                                    <div class="bg-secondary-800 rounded-2xl  mx-5 my-5 px-5 py-5 xs:mx-3 xs:my-3 xs:py-3 gap-4">
                                        <div class="w-full bg-primary-800 rounded-2xl py-3 px-7 text-white text-lg font-semibold xs:text-center">Tambahkan Postingan</div>
                                        <div class="w-full bg-white rounded-3xl mt-5 p-5">
                                            <div class="mb-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Nama :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.nama" name="nama"
                                                    placeholder="Nama">
                                            </div>
                                            <div class="mb-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    NIDN :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.NIDN" name="NIDN"
                                                    placeholder="NIDN">
                                            </div>
                                            <div class="mb-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    NIP :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.NIP" name="NIP"
                                                    placeholder="NIP">
                                            </div>
                                            <div class="mt-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Ringkasan : 
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="text" v-model="form.ringkasan"
                                                    placeholder="Ringkasan">
                                            </div>
                                            <div class="mt-4">
                                                <label
                                                    class="block text-gray-700 text-lg font-bold mb-2 xs:text-base">
                                                    Foto :
                                                </label>
                                                <input
                                                    class="shadow h-12 text-xs rounded-2xl appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    type="file" @change="updateFoto" name="foto"
                                                    placeholder="Foto">
                                                <img v-if="form.foto!=='localhost:3000/null'" :src="`http://`+form.foto" class="w-1/2 mt-2">
                                            </div>
                                            
                                            <div class="flex fex-col justify-end">
                                                <button v-if="props.id=='create'" type="submit" @click="createLecture"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Simpan</button>
                                                <button v-else type="submit" @click="updateLecture"
                                                class="bg-green-500 mt-2 hover:bg-green-600 text-white font-semibold py-1 px-5 rounded-xl ml-2">Perbaharui</button>
                                            </div>
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
import Sidebar from '../../../components/Sidebar.vue'
import {
        reactive,
        toRefs,
        onMounted
    } from 'vue'
import Swal from 'sweetalert2'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


import axios from 'axios';
export default {
    components: {
        Sidebar
    },
    props: ['id'],
    setup(props){
        const toggle = reactive({
            showMenu: true,
            isOpen: false
        });
        const toggleNav = () => {
            toggle.showMenu = toggle.showMenu === false ? true : false
        }

        const data = reactive({
            isloaded : false,
            form :{
                nama :null,
                NIDN : null,
                NIP : null,
                foto :null,
                ringkasan : null
            }
        })

    // get Lectures
        const getLecture = async ()=>{
            const send = await axios.get(`lectures/${props.id}`)
            return send.data.data
        }

        const getData = async ()=>{
            const resGetLecture = await getLecture()
            data.form.nama = resGetLecture.nama
            data.form.NIDN = resGetLecture.NIDN
            data.form.NIP = resGetLecture.NIP
            data.form.ringkasan = resGetLecture.ringkasan
            data.form.foto = resGetLecture.foto? resGetLecture.foto:null
            console.log('dataa',data.form)
        }
        
        onMounted(async () => {
            if(props.id!=='create'){
                console.log(props.id)
                await getData();
            }
            data.isloaded=true
            
        })

        const updateFoto = async(e)=>{
            let file = await e.target.files[0];
            console.log(file)
            let reader = new FileReader();
            reader.onloadend =  function(){
                console.log('RESULT' ,reader.result)
                data.form.foto = reader.result
            }
            reader.readAsDataURL(file)
        }

    //  proses create
        const createLecture = async()=>{
            const dataSave = {
                'nama': await data.form.nama,
                'NIDN': parseInt(await data.form.NIDN),
                'NIP':parseInt(await data.form.NIP) ,
                'ringkasan' :  await data.form.ringkasan,
                'foto' : await data.form.foto,
            }
            console.log('dsadsa',dataSave)
            
            const input = await axios
                .post(`lectures`, dataSave)
                .then(r => {
                    if (r.data.status === 'success') {
                        Swal.fire(
                            'Berhasil!',
                            'Data ketegori berhasil disimpan!',
                            'success'
                        )
                    }
                })
                .catch(e => {
                    Swal.fire(

                        'Gagal!',
                        `Terjadi kesalahan </br> ${e.response.data.message}`,
                        'error'
                    );
                    console.log(e);
                });
            if(input){
                console.log('masok')
            }else{
                console.log('gagal')
            }
        }

        const updateLecture = async()=>{
            const dataSave = {
                'nama': await data.form.nama,
                'NIDN': parseInt(await data.form.NIDN),
                'NIP':parseInt(await data.form.NIP) ,
                'ringkasan' :  await data.form.ringkasan,
                'foto' : await data.form.foto,
            }
            console.log('data save',dataSave)
            const input = await axios
                .put(`lectures/${props.id}`, dataSave)
                .then(r => {
                    if (r.data.status === 'success') {
                        Swal.fire(
                            'Berhasil!',
                            'Data berhasil diupdate!',
                            'success'
                        )
                    }
                })
                .catch(e => {
                    Swal.fire(
                        'Gagal!',
                        `Terjadi kesalahan </br> ${e.response.data.message}`,
                        'error'
                    );
                    console.log(e);
                });
            if(input){
                console.log('masok')
            }else{
                console.log('gagal')
            }
        }

        return {
            ...toRefs(toggle),
            toggleNav,
            ...toRefs(data),
            updateFoto,
            createLecture,
            props,
            updateLecture
        }
    }
}
</script>

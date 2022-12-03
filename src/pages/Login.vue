<template>
    <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div class="flex w-full justify-center items-center bg-primary-800 text-white rounded-xl p-4">
                    <div class="flex-row">
                        <div class="flex-col text-3xl font-extrabold text-center">LOGIN</div>
                        <div class="flex-col  text-3xl font-extrabold"> Sistem Informasi Program Studi Mekatronika</div>
                    </div>
                </div>
                <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="w-full" alt="Sample image" />
                </div>
                <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

                    <form>
                        <!-- Email input -->
                        <div class="mb-6">
                            <input type="text"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-900 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Email address" />
                        </div>

                        <!-- Password input -->
                        <div class="mb-6">
                            <input type="password"
                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-900 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Password" />
                        </div>



                        <div class="text-center lg:text-left">
                            <button type="button"
                                class="inline-block px-7 py-3 bg-yellow-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-800 hover:shadow-lg focus:yellow-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-900 active:shadow-lg transition duration-150 ease-in-out">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
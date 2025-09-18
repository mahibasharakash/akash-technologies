<template>

    <section class="w-full mb-16">
        <div class="w-full relative min-h-[250px] max-h-[250px] bg-cover object-cover" :style="{ backgroundImage: 'url(/images/slider-background.jpg)' }">
            <div class="w-full absolute inset-0 h-full bg-black/65 flex justify-end items-center flex-col pb-10">
                <div class="text-3xl mb-3 text-white "> Blogs </div>
                <div class="flex justify-center items-center gap-3">
                    <RouterLink :to="{name:'home'}" class="decoration-0 text-white text-sm"> Home </RouterLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1" stroke="currentColor" class="w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <RouterLink :to="{name:'blogs'}" class="decoration-0 text-white text-sm"> Blogs </RouterLink>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full mb-16">
        <div class="max-w-7xl mx-auto w-full">
            <div class="w-full flex flex-wrap">
                <div class="w-full lg:w-2/3 p-2">
                    <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">

                        <!-- blog column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-lg group bg-gray-100 duration-500 shadow-none hover:shadow-xl">

                            <!-- blog image -->
                            <div class="overflow-hidden min-h-[250px] max-h-[250px]">
                                <img :src="'/images/portfolio-img-1.webp'" class="scale-100 duration-500 group-hover:scale-125 object-cover bg-cover w-full min-h-[250px] max-h-[250px]" alt="blog" />
                            </div>
                            <!-- / blog image -->

                            <!-- date and comment -->
                            <div class="text-sm flex justify-between items-center text-gray-600 gap-5 px-5 mt-5">
                                <div> 21 Feb 2022 </div> <div>12 Comments</div>
                            </div>
                            <!-- / date and comment -->

                            <!-- title -->
                            <div class="px-5 py-2 text-md font-semibold mb-3">
                                Getting started with business level improved
                            </div>
                            <!-- / title -->

                            <!-- author -->
                            <div class="flex justify-between items-center gap-5 pb-7 px-5">
                                <div class="inline-flex justify-start items-center gap-3">
                                    <img :src="'/images/testimonial-author-1.webp'" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] object-cover bg-cover rounded-full" alt="author-name" />
                                    <span class="uppercase text-xs"> Daniyel </span>
                                </div>
                            </div>
                            <!-- author -->

                        </a>
                        <!-- / blog column -->

                        <!-- blog column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-lg group bg-gray-100 duration-500 shadow-none hover:shadow-xl">

                            <!-- blog image -->
                            <div class="overflow-hidden min-h-[250px] max-h-[250px]">
                                <img :src="'/images/portfolio-img-2.webp'" class="scale-100 duration-500 group-hover:scale-125 object-cover bg-cover w-full min-h-[250px] max-h-[250px]" alt="blog" />
                            </div>
                            <!-- / blog image -->

                            <!-- date and comment -->
                            <div class="text-sm flex justify-between items-center text-gray-600 gap-5 px-5 mt-5">
                                <div> 21 Feb 2022 </div> <div>12 Comments</div>
                            </div>
                            <!-- / date and comment -->

                            <!-- title -->
                            <div class="px-5 py-2 text-md font-semibold mb-3">
                                Modern fluid typography used in website Clamp
                            </div>
                            <!-- / title -->

                            <!-- author -->
                            <div class="flex justify-between items-center gap-5 pb-7 px-5">
                                <div class="inline-flex justify-start items-center gap-3">
                                    <img :src="'/images/testimonial-author-6.webp'" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] object-cover bg-cover rounded-full" alt="author-name" />
                                    <span class="uppercase text-xs"> Saimon </span>
                                </div>
                            </div>
                            <!-- author -->

                        </a>
                        <!-- / blog column -->

                        <!-- blog column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-lg group bg-gray-100 duration-500 shadow-none hover:shadow-xl">

                            <!-- blog image -->
                            <div class="overflow-hidden min-h-[250px] max-h-[250px]">
                                <img :src="'/images/portfolio-img-3.webp'" class="scale-100 duration-500 group-hover:scale-125 object-cover bg-cover w-full min-h-[250px] max-h-[250px]" alt="blog" />
                            </div>
                            <!-- / blog image -->

                            <!-- date and comment -->
                            <div class="text-sm flex justify-between items-center text-gray-600 gap-5 px-5 mt-5">
                                <div> 21 Feb 2022 </div> <div>12 Comments</div>
                            </div>
                            <!-- / date and comment -->

                            <!-- title -->
                            <div class="px-5 py-2 text-md font-semibold mb-3">
                                New fresh mobile device template for business
                            </div>
                            <!-- / title -->

                            <!-- author -->
                            <div class="flex justify-between items-center gap-5 pb-7 px-5">
                                <div class="inline-flex justify-start items-center gap-3">
                                    <img :src="'/images/testimonial-author-7.webp'" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] object-cover bg-cover rounded-full" alt="author-name" />
                                    <span class="uppercase text-xs"> Guptil </span>
                                </div>
                            </div>
                            <!-- author -->

                        </a>
                        <!-- / blog column -->

                    </div>

                    <div class="mt-10 flex justify-between items-center gap-5">
                        <div class="flex justify-start items-center gap-2">
                            <button type="button" class="bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button type="button" class="text-sm bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                1
                            </button>
                            <button type="button" class="text-sm bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                2
                            </button>
                            <button type="button" class="text-sm bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                3
                            </button>
                            <button type="button" class="text-sm bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                4
                            </button>
                            <button type="button" class="text-sm bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                5
                            </button>
                            <button type="button" class="bg-amber-100 rounded-lg text-black hover:text-white hover:bg-amber-600 duration-500 cursor-pointer min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="text-xs font-medium text-gray-600">
                            10 out of 30 in 300
                        </div>
                    </div>

                </div>
                <div class="w-full lg:w-1/3 p-2">

                    <!-- search -->
                    <div class="bg-gray-100 p-5 rounded-lg mb-4">
                        <div class="mb-3 w-full block font-semibold text-2xl"> Search </div>
                        <div class="w-full relative">
                            <input type="text" name="keyword" class="w-full block min-h-[45px] max-h-[45px] outline-0 border-0 bg-white ps-12 pe-4 text-sm rounded-lg font-medium" placeholder="Search Here" required autocomplete="off" />
                            <div class="absolute top-0 bottom-0 start-0 ps-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- / search -->

                    <!-- category -->
                    <div class="bg-gray-100 p-5 rounded-lg mb-4">
                        <div class="mb-3 w-full block font-semibold text-2xl"> Category </div>
                        <div class="w-full flex flex-wrap gap-1">
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Technology
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Education
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Health & Fitness
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Entertainment
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Business & Finance
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Science & Innovation
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Travel & Tourism
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Food & Lifestyle
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Sports
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                Environment & Sustainability
                            </button>
                            <button type="button" class="duration-500 text-xs inline-block cursor-pointer rounded-md px-4 py-2 outline-0 border-0 bg-amber-600 hover:bg-amber-800 text-white">
                                All
                            </button>
                        </div>
                    </div>
                    <!-- / category -->

                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>

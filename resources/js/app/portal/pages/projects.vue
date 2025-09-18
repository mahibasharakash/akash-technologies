<template>

    <section class="w-full mb-16">
        <div class="w-full relative min-h-[250px] max-h-[250px] bg-cover object-cover" :style="{ backgroundImage: 'url(/images/slider-background.jpg)' }">
            <div class="w-full absolute inset-0 h-full bg-black/65 flex justify-end items-center flex-col pb-10">
                <div class="text-3xl mb-3 text-white "> Projects </div>
                <div class="flex justify-center items-center gap-3">
                    <RouterLink :to="{name:'home'}" class="decoration-0 text-white text-sm"> Home </RouterLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1" stroke="currentColor" class="w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <RouterLink :to="{name:'projects'}" class="decoration-0 text-white text-sm"> Projects </RouterLink>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full">
        <div class="px-10 max-w-7xl mx-auto mb-16">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Portfolio Website with Blog
                        </div>
                        <div class="text-sm text-gray-800">
                            Personal site showcasing projects, skills, and posts.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Task Management System
                        </div>
                        <div class="text-sm text-gray-800">
                            A web app like Trello to create, assign, and track tasks.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            E-commerce Platform
                        </div>
                        <div class="text-sm text-gray-800">
                            Online store with product catalog, cart, checkout, and payment integration.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Online Learning System (LMS)
                        </div>
                        <div class="text-sm text-gray-800">
                            A platform for courses, quizzes, progress tracking, and certification.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Chat Application
                        </div>
                        <div class="text-sm text-gray-800">
                            Real-time messaging app with WebSocket support (like WhatsApp Web).
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Hospital Management System
                        </div>
                        <div class="text-sm text-gray-800">
                            For managing patients, doctors, appointments, and billing.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Inventory Management System
                        </div>
                        <div class="text-sm text-gray-800">
                            Track stock, sales, and suppliers for businesses.
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0)" class="w-full block overflow-hidden border border-gray-200 rounded-xl shadow-sm duration-500 hover:shadow-2xl">
                    <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] bg-gradient-to-b from-amber-600 to-red-600"></div>
                    <div class="w-full pt-3 pb-5 px-7">
                        <div class="text-lg my-3 font-medium">
                            Food Delivery
                        </div>
                        <div class="text-sm text-gray-800">
                            Restaurant listings, order tracking, and delivery management.
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}

</script>

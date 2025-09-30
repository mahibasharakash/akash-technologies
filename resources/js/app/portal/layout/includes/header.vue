<template>

    <header class="w-full font-medium top-0 start-0 end-0 fixed z-50 duration-500" :class="{ 'shadow-2xl bg-gray-900/85 backdrop-blur-xl' : isScrolled, 'shadow-none bg-transparent backdrop-blur-0' : !isScrolled }">
        <div class="px-10 max-w-7xl mx-auto w-full flex justify-between items-center duration-500" :class="{ 'min-h-[80px]' : isScrolled, 'min-h-[70px]' : !isScrolled }">
            <RouterLink :to="{name:'home'}" class="decoration-0 text-white text-lg">
                Akash Technologies
            </RouterLink>
            <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex lg:hidden justify-center items-center outline-0 border-0 bg-gray-300 hover:bg-gray-700 text-gray-900 hover:text-white duration-500 rounded-full" @click.stop="sidebarToggle()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>
            <div class="top-0 z-50 bottom-0 bg-white lg:bg-transparent h-screen lg:h-auto w-[360px] lg:w-auto fixed lg:static flex justify-center flex-col lg:flex-row lg:justify-end items-center gap-5 duration-500" :class="{ 'end-0' : isSidebarActive, '-end-[360px]' : !isSidebarActive }" @click.stop>
                <div class="absolute top-0 end-0 p-4 lg:hidden">
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex lg:hidden justify-center items-center outline-0 border-0 bg-gray-300 hover:bg-gray-700 text-gray-900 hover:text-white duration-500 rounded-full" @click="closeSidebar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <RouterLink :to="{name:'home'}" :class="{ 'text-amber-500' : $route.name === 'home', 'text-black lg:text-white' : $route.name !== 'home' }" class="decoration-0 text-sm duration-500 hover:text-amber-500" @click="closeSidebar()">
                    Home
                </RouterLink>
                <RouterLink :to="{name:'login'}" :class="{ 'text-amber-500' : $route.name === 'login', 'text-black lg:text-white' : $route.name !== 'login' }" class="decoration-0 text-sm duration-500 hover:text-amber-500" @click="closeSidebar()">
                    Login
                </RouterLink>
                <RouterLink :to="{name:'registration'}" :class="{ 'text-amber-500' : $route.name === 'registration', 'text-black lg:text-white' : $route.name !== 'registration' }" class="decoration-0 text-sm duration-500 hover:text-amber-500" @click="closeSidebar()">
                    Registration
                </RouterLink>
                <RouterLink :to="{name:'details'}" :class="{ 'text-amber-500' : $route.name === 'details', 'text-black lg:text-white' : $route.name !== 'details' }" class="decoration-0 text-sm duration-500 hover:text-amber-500" @click="closeSidebar()">
                    Details
                </RouterLink>
                <a href="javascript:void(0)" class="text-black lg:text-white decoration-0 text-sm duration-500 hover:text-amber-500" @click="closeSidebar()">
                    Logout
                </a>
            </div>
        </div>
    </header>

</template>

<script>

export default {
    data() {
        return {
            isScrolled: false,
            isSidebarActive: false,
        }
    },
    mounted() {
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener('click', (event) => this.handleOutSideClick());
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', (event) => this.handleOutSideClick());
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 100;
        },
        sidebarToggle() {
            this.isSidebarActive = !this.isSidebarActive;
        },
        handleOutSideClick() {
            this.isSidebarActive = false;
        },
        closeSidebar() {
            this.isSidebarActive = false;
        }
    }
}

</script>

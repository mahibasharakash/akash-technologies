<template>

    <section class="w-full bg-bottom object-bottom relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/75" :style="{ backgroundImage: 'Url(/images/slider-background.jpg)' }">
        <div class="mx-auto max-w-7xl w-full min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative" v-if="$route.name === 'login'">
            <div class="text-2xl text-white mb-3"> Login </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'login'}" class="inline-block decoration-0 text-white">
                    Login
                </RouterLink>
            </div>
        </div>
        <div class="mx-auto max-w-7xl w-full min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative" v-if="$route.name === 'registration'">
            <div class="text-2xl text-white mb-3"> Registration </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'registration'}" class="inline-block decoration-0 text-white">
                    Registration
                </RouterLink>
            </div>
        </div>
        <div class="mx-auto max-w-7xl w-full min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative" v-if="$route.name === 'forgot'">
            <div class="text-2xl text-white mb-3"> Forgot Password </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'forgot'}" class="inline-block decoration-0 text-white">
                    Forgot Password
                </RouterLink>
            </div>
        </div>
        <div class="mx-auto max-w-7xl w-full min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative" v-if="$route.name === 'reset'">
            <div class="text-2xl text-white mb-3"> Reset Account </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'reset'}" class="inline-block decoration-0 text-white">
                    Reset Account
                </RouterLink>
            </div>
        </div>
        <div class="mx-auto max-w-7xl w-full min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative" v-if="$route.name === 'verification'">
            <div class="text-2xl text-white mb-3"> Verification </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'verification'}" class="inline-block decoration-0 text-white">
                    Verification
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full">
        <div class="px-10 max-w-7xl mx-auto w-full flex justify-center items-center py-16">
            <div class="max-w-[450px] mx-auto w-full border border-gray-50 bg-gray-50 p-10 rounded-md">
                <RouterView></RouterView>
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

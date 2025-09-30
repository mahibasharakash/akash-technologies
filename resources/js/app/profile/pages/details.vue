<template>

    <section class="w-full bg-bottom object-bottom relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/75" :style="{ backgroundImage: 'Url(/images/slider-background.jpg)' }">
        <div class="w-full max-w-7xl mx-auto min-h-[270px] max-h-[270px] flex justify-end pb-16 items-center flex-col relative">
            <div class="text-2xl text-white mb-3"> Details </div>
            <div class="inline-flex justify-center items-center gap-3">
                <RouterLink :to="{name:'home'}" class="inline-block decoration-0 text-white">
                    Home
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <RouterLink :to="{name:'details'}" class="inline-block decoration-0 text-white">
                    Details
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full">
        <div class="py-16 px-10 max-w-7xl mx-auto w-full">

            <div class="w-full border border-gray-50 bg-gray-100 p-10 rounded-md mb-5">
                <div class="mb-2 w-full block"> Change Details </div>
                <div class="mb-5 w-full block text-xs max-w-[700px]"> Update your account's profile information and email address </div>
                <form class="w-full block">
                    <div class="mb-3 w-full block">
                        <label for="name" class="form-label"> Name </label>
                        <input id="name" type="text" name="name" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="email" class="form-label"> Email </label>
                        <input id="email" type="email" name="email" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="address" class="form-label"> Address </label>
                        <input id="address" type="text" name="address" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="w-full block">
                        <button type="submit" class="btn-theme min-w-[125px] max-w-[125px]">
                            Update
                        </button>
                    </div>
                </form>
            </div>

            <div class="w-full border border-gray-50 bg-gray-100 p-10 rounded-md mb-5">
                <div class="mb-2 w-full block"> Change Password </div>
                <div class="mb-5 w-full block text-xs max-w-[700px]"> Ensure your account is using a long, random password to stay secure. </div>
                <form class="w-full block">
                    <div class="mb-3 w-full block">
                        <label for="current_password" class="form-label"> Current Password </label>
                        <input id="current_password" type="password" name="current_password" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="password" class="form-label"> Password </label>
                        <input id="password" type="password" name="password" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="password_confirmation" class="form-label"> Password Confirmation </label>
                        <input id="password_confirmation" type="password" name="password_confirmation" class="form-control" required autocomplete="off" />
                    </div>
                    <div class="w-full block">
                        <button type="submit" class="btn-theme min-w-[125px] max-w-[125px]">
                            Update
                        </button>
                    </div>
                </form>
            </div>

            <div class="w-full border border-gray-50 bg-gray-100 p-10 rounded-md">
                <div class="mb-2 w-full block"> Delete Account </div>
                <div class="mb-5 w-full block text-xs max-w-[700px]"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div>
                <form class="w-full">
                    <button type="submit" class="btn-danger min-w-[125px] max-w-[125px]">
                        Confirm
                    </button>
                </form>
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

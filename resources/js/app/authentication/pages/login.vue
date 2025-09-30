<template>

    <form class="w-full block">
        <div class="mb-4 w-full block">
            <label for="email" class="form-label"> Email </label>
            <input id="email" type="email" name="email" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <label for="password" class="form-label"> Password </label>
            <input id="password" type="password" name="password" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full flex justify-between items-center">
            <button type="submit" class="btn-theme min-w-[105px] max-w-[105px]">
                Login
            </button>
            <RouterLink :to="{name:'forgot'}" class="decoration-0 text-red-500 inline-block text-sm">
                Forgot password?
            </RouterLink>
        </div>
        <div class="text-center text-sm">
            No have an account?
            <br/>
            <RouterLink :to="{name:'registration'}" class="inline-block decoration-0 text-blue-500 duration-500 hover:text-blue-700 text-sm">
                Registration
            </RouterLink>
        </div>
    </form>

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

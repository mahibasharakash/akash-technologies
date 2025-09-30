<template>

    <form class="w-full block">
        <div class="mb-4 w-full block">
            <label for="email" class="form-label"> Email </label>
            <input id="email" type="email" name="email" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <button type="submit" class="btn-theme min-w-[105px] max-w-[105px]">
                Forgot
            </button>
        </div>
        <div class="text-center text-sm">
            Remember Password?
            <br/>
            <RouterLink :to="{name:'login'}" class="inline-block decoration-0 text-blue-500 duration-500 hover:text-blue-700 text-sm">
                Login
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

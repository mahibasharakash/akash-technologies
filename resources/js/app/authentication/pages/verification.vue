<template>

    <form class="w-full block">
        <div class="mb-4 w-full block">
            <label for="verification_code" class="form-label"> Verification Code </label>
            <input id="verification_code" type="text" name="verification_code" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full flex justify-between items-center">
            <button type="submit" class="btn-theme min-w-[105px] max-w-[105px]">
                Verify
            </button>
        </div>
        <div class="text-center text-sm">
            Verified Account?
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

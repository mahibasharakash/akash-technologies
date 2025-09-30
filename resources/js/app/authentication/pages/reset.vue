<template>

    <form class="w-full block">
        <div class="mb-4 w-full block">
            <label for="email" class="form-label"> Email </label>
            <input id="email" type="email" name="email" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <label for="reset_code" class="form-label"> Reset Code </label>
            <input id="reset_code" type="text" name="reset_code" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <label for="password" class="form-label"> Password </label>
            <input id="password" type="password" name="password" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <label for="password_confirmation" class="form-label"> Password Confirmation </label>
            <input id="password_confirmation" type="password" name="password_confirmation" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <button type="submit" class="btn-theme min-w-[105px] max-w-[105px]">
                Submit
            </button>
        </div>
        <div class="text-center text-sm">
            Already Reset Password?
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

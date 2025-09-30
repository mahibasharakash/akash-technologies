<template>

    <form class="w-full block">
        <div class="mb-4 w-full block">
            <label for="name" class="form-label"> Name </label>
            <input id="name" type="text" name="name" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-4 w-full block">
            <label for="email" class="form-label"> Email </label>
            <input id="email" type="email" name="email" class="form-control" required autocomplete="off" />
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
            <button type="submit" class="btn-theme min-w-[150px] max-w-[150px]">
                Registration
            </button>
        </div>
        <div class="text-center text-sm">
            Already have an account?
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

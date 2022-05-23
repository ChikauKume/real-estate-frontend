<template>
    <div>
        <div class="header-bar bg-navy-blue w-full h-5">
            <div class="px-48 text-white text-sm">東海地方の物件サイト</div>
        </div>
        <div class="px-48 flex border-b-2">
            <nuxt-link to="/"  class="logo left-side mr-auto py-4 text-3xl font-semibold">
                Mike Real Estate 
            </nuxt-link>
            <div class="right-side ml-auto flex space-x-4 text-lg items-center">
                <nuxt-link to="/register" class="registration font-semibold hover:border-red-700 border-transparent border-b-2 cursor-pointer py-2 px-3 cursor-pointer">会員登録</nuxt-link>
                <nuxt-link to="/login" class="login font-semibold hover:border-red-700 border-transparent border-b-2
        cursor-pointer py-2 px-3 cursor-pointer">ログイン</nuxt-link>
            </div>
        </div>
        <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item">
                <a class="nav-link">{{ user.name }}</a>
            </li> -->
            <li class="nav-item">
                <button @click.prevent="logout" class="nav-link">Logout</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$auth.logout()
        }
    }
}
</script>


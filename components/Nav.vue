<template>
    <div>
        <div class="header-bar bg-navy-blue w-full h-full">
            <div class="px-48 text-white text-sm">東海地方の物件サイト</div>
        </div>
        <div class="px-48 w-full flex justify-between border-b border-gray">
            <nuxt-link to="/"  class="logo left-side mr-auto py-2 text-2xl font-semibold">
                {{ title }}
            </nuxt-link>

            <div v-if="!this.$auth.user" class="flex justify-end items-center">
                <nuxt-link to="/register" class="registration font-semibold hover:border-red-700 border-transparent border-b-2 cursor-pointer py-2 px-3 cursor-pointer">会員登録</nuxt-link>
                <nuxt-link to="/login" class="login font-semibold hover:border-red-700 border-transparent border-b-2
                cursor-pointer py-2 px-3 cursor-pointer">
                    ログイン
                </nuxt-link>
            </div>
            <div v-else class="flex justify-end items-center">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-navigation-drawer
                v-model="drawer"
                absolute
                bottom
                temporary
                right
                >
                    <v-list nav>

                        <div class="py-4 px-2 font-semibold">{{this.$auth.user.data.name}}</div>

                        <v-list-item-group
                            v-model="group"
                        >
                        <v-list-item>
                            <nuxt-link class="text-sm" to='/'>
                                トップ
                            </nuxt-link>
                        </v-list-item>

                        <v-list-item>
                            <nuxt-link class="text-sm" to='/buyers/dashboard'>
                                お気に入り / 入札 / 購入物件
                            </nuxt-link>
                        </v-list-item>

                        <v-list-item>
                            <nuxt-link class="text-sm" to='/buyers/profile'>
                                プロフィール
                            </nuxt-link>
                        </v-list-item>

                        <v-list-item>
                            <div class="text-sm" @click.prevent="logout">ログアウト</div>
                        </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            </div>
        </div>
        <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item">
                <a class="nav-link">{{ user.name }}</a>
            </li> -->
            <!-- <li class="nav-item">
                <button @click.prevent="logout" class="nav-link">Logout</button>
            </li> -->
        </ul>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'マイ暮らし',
            drawer: false,
            group: null,
        }
    },
    methods:{
        logout(){
            this.$auth.logout()
            this.$router.push({
                path: this.$route.query.redirect || '/'
            })
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>


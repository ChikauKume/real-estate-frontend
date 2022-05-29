<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <button @click.prevent="logout" class="cursor-pointer flex justify-start">
              ログアウト
            </button>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      </v-btn>
    </v-app-bar>
    <v-main>
        <Nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span class="w-full text-center">&copy; {{ new Date().getFullYear() }} {{title}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    middleware: ['auth'],
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-home-city',
                    title: '不動産管理',
                    to: '/admin/real-estates'
                },
                {
                    icon: 'mdi-account',
                    title: 'ユーザ管理',
                    to: '/admin/users'
                },
                {
                    icon: 'mdi-email',
                    title: 'お問い合わせ管理',
                    to: '/admin/inquiries'
                },
                {
                    // title: 'Logout',
                    // to: '/admin/logout'
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Mike Real Estate'
        }
    },
    methods: {
        // 表示ボタンが押下された時に呼び出される。
        onClickShow(item) {
            console.log(`${item.name}:${item.price}`);
        },
        logout(){
            this.$auth.logout()
            this.$router.push({
                path: this.$route.query.redirect || '/admin/login'
            })
        }
    }
}
</script>
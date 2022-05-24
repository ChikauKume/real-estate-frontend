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
        <div class="p-10">

            <div class="text-2xl mb-5">不動産管理</div>

            <div class="border w-5/6 border-gray-300 shadow rounded p-4 mb-5">
                <div>
                    <div class="flex space-x-4">
                        <img src="/image/first-view.jpeg" class="w-1/12 rounded">
                        <div class="flex w-full">
                            <span class="flex items-center text-lg">レジデンス白潟 A000B/ 2階</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button class="py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
                                Edit
                            </button>
                            <button class="py-1 bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <v-data-table
                :headers="headers"
                :items="contents"
                class="elevation-1"
            >
                <template slot="item.delete" slot-scope="props">
                    <v-btn class="mx-2" icon @click="() => delete(props.item)">
                        <v-icon dark>mdi-delete</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </div>
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
    name: 'DefaultLayout',
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-home-city',
                    title: 'Real Estate',
                    to: '/real-estates'
                },
                {
                    icon: 'mdi-account',
                    title: 'User',
                    to: '/users'
                },
                {
                    icon: 'mdi-email',
                    title: 'Inquiry',
                    to: '/inquiries'
                },
            ],
            headers: [
                // Dynamic headers
                {
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: '',
                    // Row to replace the original template
                    value: 'delete'
                },
            ],
            contents: [
                {
                    id: 1,
                    name: 'A'
                },
                {
                    id: 2,
                    name: 'B'
                }
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
    }
}
</script>

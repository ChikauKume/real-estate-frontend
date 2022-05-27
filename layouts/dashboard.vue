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
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-home-city',
                    title: 'Real Estate',
                    to: '/admin/real-estates'
                },
                {
                    icon: 'mdi-account',
                    title: 'User',
                    to: '/admin/users'
                },
                {
                    icon: 'mdi-email',
                    title: 'Inquiry',
                    to: '/admin/inquiries'
                },
            ],
            headers: [
                // Dynamic headers
                {
                    text: '',
                    value: 'image',
                },
                {
                    text: 'Type',
                    value: 'type',
                    align: 'center'
                },
                {
                    text: 'Name',
                    value: 'name',
                    align: 'center'
                },
                {
                    text: 'Bill',
                    value: 'bill',
                    align: 'center'
                },
                {
                    text: 'Location',
                    value: 'location',
                    align: 'center'
                },
                {
                    text: 'Transportation',
                    value: 'transportation',
                    align: 'center'
                },
                {
                    text: 'Area',
                    value: 'area',
                    align: 'center'
                },
                {
                    text: 'Layout',
                    value: 'layout',
                    align: 'center'
                },
                {
                    text: '',
                    value: 'edit',
                    align: 'center'
                },
                {
                    text: '',
                    value: 'delete',
                    align: 'center'
                },
            ],
            contents: [
                {
                    id: 1,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'Kレジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
                },
                {
                    id: 2,
                    image: 'first-view.jpeg',
                    name: 'レジデンス白潟 A000B/ 2階',
                    type: '一戸建て',
                    bill: '85,000',
                    location: '島根県松江市菅田町332-3',
                    transportation: 'JR山陰本線 松江駅 徒歩10分',
                    area: '18.15㎡',
                    layout: '1K',
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
    }
}
</script>
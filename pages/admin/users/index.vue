<template>
    <div class="p-10">
        <div class="text-2xl mb-5">顧客管理</div>

        <div class="flex">
            <v-text-field
                append-icon="mdi-magnify"
                label="検索"
                single-line
                class="w-1/2"
                v-model="search"
            />
            <v-btn
                class="ml-4"
                fab
                dark
                color="indigo"
                @click="$router.push('/admin/users/new')"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </div>
        <v-data-table
            :headers="headers"
            :items="contents"
            :search="search"
            class="elevation-1"
        >
            <template slot="item.edit" slot-scope="props" class="flex">
                <v-btn icon  @click="() => edit(props.item.id)">
                    <v-icon dark>mdi-pencil-box-outline</v-icon>
                </v-btn>
            </template>
            <template slot="item.delete" slot-scope="props" class="flex">
                <v-btn icon @click="() => delete(props.item)">
                    <v-icon dark>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            headers: [
                // Dynamic headers
                {
                    text: '名前',
                    value: 'name',
                    align: 'center'
                },
                {
                    text: 'メールアドレス',
                    value: 'email',
                    align: 'center'
                },
                {
                    text: '状態',
                    value: 'user_status',
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
            contents: [],
            search: "",
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'User Management | Mike Real Estate'
        }
    },
    mounted(){
      this.getData()
    },
    methods: {
        async getData(){
            try {
              const res = await this.$axios.$get('/admin/users')
              console.log('data', res.data)

              for(let i=0; i<res.data.length; i++){

                    let content = {
                        name: (res.data[i].name).substr(0,15),
                        email: (res.data[i].email).substr(0,15),
                        user_status: res.data[i].user_status.name,
                    }
                    this.contents.push(content)
                }
          }
          catch(err){
              console.log('error',err)
          }
        },
        logout(){
            this.$auth.logout()
            this.$router.push({
                path: this.$route.query.redirect || '/'
            })
        }
    }
}
</script>
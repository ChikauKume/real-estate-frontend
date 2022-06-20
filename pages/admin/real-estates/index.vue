<template>
    <div class="p-10">
        <div class="text-2xl mb-5">不動産管理</div>

        <div v-if="this.$route.query.success_message" class="text-green-700 font-bold">{{this.$route.query.success_message}}</div>
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
                @click="$router.push('/admin/real-estates/new')"
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
            <template v-slot:[`item.image`]="{ item }">
                <v-img 
                :src="item.image"
                :aspect-ratop="16/9"
                height="6vw" 
                min-height="80px"
                width="10vw" 
                min-width="160px" 
                class="my-2"/>
            </template>
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
                    text: '',
                    value: 'image',
                },
                {
                    text: 'タイプ',
                    value: 'type',
                    align: 'center'
                },
                {
                    text: '物件名',
                    value: 'name',
                    align: 'center'
                },
                {
                    text: '家賃 (円) / 月',
                    value: 'bill',
                    align: 'center'
                },
                {
                    text: '所在地',
                    value: 'location',
                    align: 'center'
                },
                // {
                //     text: 'Transportation',
                //     value: 'transportation',
                //     align: 'center'
                // },
                // {
                //     text: 'Area',
                //     value: 'area',
                //     align: 'center'
                // },
                {
                    text: 'レイアウト',
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
            search: "",
            contents: [],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            baseImageUrl : 'https://gna-real-estate.s3.ap-northeast-1.amazonaws.com/realestates/'
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        // 表示ボタンが押下された時に呼び出される。
        onClickShow(item) {
            console.log(`${item.name}:${item.price}`);
        },
        async getData(){
            try {
                const res = await this.$axios.$get('/real-estates')
                console.log('data', res.data)
                for(let i=0; i<res.data.length; i++){

                    let content = {
                        id: res.data[i].id,
                        image: this.baseImageUrl + (res.data[i].image).split(',')[0],
                        name: (res.data[i].name).substr(0,15),
                        type: res.data[i].type.type + res.data[i].type.name,
                        bill: res.data[i].bill,
                        location: (res.data[i].address1 + res.data[i].address2 + res.data[i].address3 + res.data[i].address4).substr(0,11),
                        layout: res.data[i].layout.name,
                        edit: res.data[i].id,
                    }
                    this.contents.push(content)
                }
                console.log('contents', this.contents)
            }
            catch(err){
                console.log('error',err)
            }
        },
        edit(id){
            this.$router.push({
                path: '/admin/real-estates/'+id+'/edit',
            })           
            console.log('params', id)
        }
    }
}
</script>
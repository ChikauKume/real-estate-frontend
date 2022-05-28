<template>
    <div class="p-10">
        <div class="text-2xl mb-5">不動産管理</div>
        <v-text-field
            append-icon="mdi-magnify"
            label="検索"
            single-line
        />
        <v-data-table
            :headers="headers"
            :items="contents"
            class="elevation-1"
        >
            <template v-slot:[`item.image`]="{ item }">
                <v-img 
                :src="'/image/'+item.image"
                :aspect-ratop="16/9"
                height="6vw" 
                min-height="80px"
                width="10vw" 
                min-width="160px" 
                class="my-2"/>
            </template>
            <template slot="item.edit" slot-scope="props" class="flex">
                <v-btn icon @click="() => delete(props.item)">
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
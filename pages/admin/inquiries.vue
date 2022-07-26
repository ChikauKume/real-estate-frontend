<template>
    <div class="p-10">
        <div class="text-2xl mb-5">お問い合わせ管理</div>
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
                {
                    text: 'Email',
                    value: 'email',
                    align: 'center'
                },
                {
                    text: 'Name',
                    value: 'name',
                    align: 'center'
                },
                {
                    text: 'Real Estate',
                    value: 'real_estate',
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
                    email: 'test@gmail.com',
                    name: 'User A',
                    real_estate: 'Room A',
                },
                {
                    id: 2,
                    email: 'admin@gmail.com',
                    name: 'User B',
                    real_estate: 'Room B',
                },
                {
                    id: 3,
                    email: 'admin+1@gmail.com',
                    name: 'User C',
                    real_estate: 'Room C',
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'User Management | Mike Real Estate'
        }
    },
    methods: {
        // 表示ボタンが押下された時に呼び出される。
        // onClickShow(item) {
        //     console.log(`${item.name}:${item.price}`);
        // },
    }
}
</script>
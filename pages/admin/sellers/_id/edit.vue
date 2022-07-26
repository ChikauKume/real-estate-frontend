<template>
    <div class="p-10">
        <div class="text-2xl mb-5">売主編集</div>

        <UsersValidation :errors = errors />

        <table class="mb-10 w-5/6">
            <tbody>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">名　前</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.name"
                            placeholder='例 : 山田太郎'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">メールアドレス</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.email"
                            placeholder='例 : test@gmail.com'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">パスワード</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.password"
                            placeholder='*************'
                            type="password"
                        />
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">状態</td>
                    <td class="border border-gray text-sm">
                        <select v-model.trim="form.user_status_id"
                            class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                            <option 
                                v-for="status in statuses" 
                                :key="status.id" 
                                :value="status.id">
                                {{status.name}}
                            </option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mt-5 w-1/2 flex justify-center">
            <button 
                type="button"
                @click="update"
                class="
                flex justify-center
                w-full
                font-semibold 
                text-white
                bg-orange 
                text-center p-3 rounded"
            >
            上記の内容で更新する
            </button> 
        </div>
    </div>
</template>

<script>
import UsersValidation from '@/components/UsersValidation.vue'

export default {
    component:{
        UsersValidation
    },
    layout: "dashboard",
    data () {
        return {
            form:{
                'id': '',
                'name': '',
                'email': '',
                'password': '',
                'user_type_id': null,
                'user_status_id': null
            },
            statuses: [],
        }
    },
    methods: {
        async getData(){
            try{
                const res = await this.$axios.$get('/admin/sellers/'+ this.$route.params.id)
                this.form = res.data
                this.form.user_status_id = res.data.user_status.id
            }
           catch(err){
                console.log(err)
            }
        },
        async update(){
            try{
                const res = await this.$axios.$post('/admin/sellers/update', this.form)

                this.$router.push({
                    path: '/admin/sellers',
                    query :{ success_message: '売主の編集が完了いたしました'},
                })

            }
            catch(err){
                console.log(err)
            }

        },
        async getStatus(){
            try {
                const res = await this.$axios.$get('/admin/sellers/getStatus')
                this.statuses = res
            }
            catch(err){
                console.log('error',err)
            }
        },
    },
    mounted(){
        this.getData()
        this.getStatus()
    },
}
</script>
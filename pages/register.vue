<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2">
                <div class="px-6 w-full">

                    <h1 class="mb-6 text-3xl text-center">会員登録</h1>

                    <div class="errors my-4 text-red-700 text-center">
                        <div v-if="errors.error">{{ errors.error[0] }}</div>
                        <div v-if="errors.name">{{ errors.name[0] }}</div>
                        <div v-if="errors.email">{{ errors.email[0] }}</div>
                        <div v-if="errors.password">{{ errors.password[0] }}</div>
                        <div v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                    </div>

                    <v-form @submit.prevent="submit">
                        <v-container>
                                <!-- <button
                                type="submit"
                                class="w-full bg-violet text-center text-white py-3 mb-10 rounded my-1"
                            >
                                <fa :icon="['fab', 'google']" />
                                <span>Google アカウントでログイン</span>
                            </button> -->
                            <!-- <v-alert
                                dense
                                outlined
                                type="error"
                                class="text-red-700"
                            >
                                error message here
                            </v-alert>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                class="text-red-700"
                            >
                                error message here
                            </v-alert> -->
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model.trim="form.name"
                                        placeholder='Test'
                                        label="名 前"
                                        :error="form.error"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model.trim="form.email"
                                        placeholder='test@gmail.com'
                                        label="メールアドレス"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model.trim="form.phone"
                                        placeholder='09011223344'
                                        label="電話番号"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model.trim="form.password"
                                        placeholder='8文字以上で入力'
                                        label="パスワード"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model.trim="form.password_confirmation"
                                        placeholder='8文字以上で入力'
                                        label="パスワード (確認)"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <div class="form-check">
                                        <div>
                                            <input type="checkbox" tabindex="0" checked>
                                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                                <a
                                                    @click="openPDF('terms-of-use.pdf')"
                                                    class="text-indigo-700 underline font-semibold"
                                                    >利用規約</a> に同意する
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" tabindex="0" checked>
                                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                                <a  
                                                    class="text-indigo-700 underline font-semibold" 
                                                    @click="openPDF('privacy-policy.pdf')">
                                                        プライバシーポリシー
                                                    </a> に同意する                                
                                            </label>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <button
                                        type="submit"
                                        class="w-full text-center py-3 font-semibold rounded bg-submit-btn text-white hover:bg-green-dark focus:outline-none my-1"
                                    >登録する</button>        
                                    <div class="text-grey-dark mt-6">
                                        アカウントを持っている方は<nuxt-link to='/login' class="text-indigo-700 font-semibold">こちら</nuxt-link>から。                    
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import verifyVue from './verify.vue';

export default {
    data(){
        return {
            form:{
                name: 'test',
                email: 'test@gmail.com',
                phone: '07089387369',
                password: 'password',
                password_confirmation: 'password',
            },
        }
    },
    mounted() {
    },
    methods:{

        openPDF(path){
            const url = 'http://localhost:3000/file/';
            window.open(url+path, '_blank');
        },

       async submit(){
            try{
                const res = await this.$axios.$post('/register', this.form)
                console.log(res)
                
                // await this.$auth.login({
                //     data: {
                //         email: this.form.email,
                //         password: this.form.password,
                //     }
                // })

                this.submitSMS();
                this.$router.push({
                    path: '/verify',
                    query:{
                        email: this.form.email,
                        phone: this.form.phone,
                    },
                    props: true
                })
                // window.location = "http://localhost:3000";

            }
            catch(err){

                console.log(err)
            }
        },
               
        async submitSMS(){
            try{
                const res = await this.$axios.$post('/sendSMS',this.form)
                console.log('res', res)
            }
             catch(err){
                console.log('error',err)
            }
        },
    }
}
</script>
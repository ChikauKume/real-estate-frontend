<template>
    <div class="px-64">
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2 w-2/3">
                <div class="px-6 w-full">

                    <h1 class="mb-8 text-3xl text-center">ログイン</h1>
                    
                    <!-- <button
                        type="submit"
                        class="w-full bg-violet text-center text-white py-3 mb-10 rounded my-1"
                    >
                        <fa :icon="['fab', 'google']" />
                        <span>Google アカウントでログイン</span>
                    </button> -->
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
                                        v-model.trim="form.email"
                                        placeholder='test@gmail.com'
                                        label="メールアドレス"
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
                                    <button
                                        type="submit"
                                        class="w-full text-center py-3 rounded bg-submit-btn text-white hover:bg-green-dark focus:outline-none my-1"
                                    >ログイン</button>        
                                    <div class="text-grey-dark mt-6">
                                        アカウントをお持ちでない方は<nuxt-link to='/register' class="text-indigo-700 font-semibold">こちら</nuxt-link>から。                    
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
export default {
    layout: "default",

    data(){
        return {
            form:{
                email: 'test@gmail.com',
                password: 'password',
            }
        }
    },
    methods:{
        async submit(){
            try{
                await this.$auth.login({data: this.form})
                this.$router.push({
                    path: this.$route.query.redirect || '/'
                })
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
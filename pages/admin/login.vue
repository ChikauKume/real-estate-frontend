<template>
    <div class="w-1/2 py-16 mx-auto">
        <div class="px-6 w-full">

            <h1 class="mb-6 text-3xl text-center">ログイン</h1>
            
            <!-- <button
                type="submit"
                class="w-full bg-violet text-center text-white py-3 mb-10 rounded my-1"
            >
                <fa :icon="['fab', 'google']" />
                <span>Google アカウントでログイン</span>
            </button> -->
            <div class="text-center text-red-700" v-if="errors.email">{{ errors.email[0] }}</div>

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
                                require
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
                                class="w-full text-center font-semibold py-3 rounded bg-submit-btn text-white hover:bg-green-dark focus:outline-none my-1"
                            >ログイン</button>        
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
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
            const res = await this.$auth.login({data: this.form})
                console.log('res',res)
                // this.$router.push({
                //     path: this.$route.query.redirect || '/'
                // })
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
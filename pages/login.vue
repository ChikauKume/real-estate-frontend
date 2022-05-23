<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2">
                <div class="px-6 w-full">

                    <h1 class="mb-8 text-3xl text-center">ログイン</h1>
                    
                    <button
                        type="submit"
                        class="w-full bg-violet text-center text-white py-3 mb-10 rounded my-1"
                    >
                        <fa :icon="['fab', 'google']" />
                        <span>Google アカウントでログイン</span>
                    </button>

                    <form @submit.prevent="submit">
                        <div>
                            <input 
                                type="text"
                                v-model.trim="form.email"
                                class="blo\ck border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />
                            <!-- <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small> -->
                        </div>
                        
                        <div>
                            <input 
                                type="password"
                                v-model.trim="form.password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                                <!-- <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small> -->
                        </div>
 
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-register text-white hover:bg-green-dark focus:outline-none my-1"
                        >ログイン</button>        
                    </form>
                    <div class="text-grey-dark mt-6">
                        アカウントをお持ちでない方は<nuxt-link to='/register' class="text-indigo-700 font-semibold">こちら</nuxt-link>から。                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    // middleware: ['guest'],

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
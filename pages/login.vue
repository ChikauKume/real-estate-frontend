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
                        <input 
                            type="text"
                            v-model.trim="form.name"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input 
                            type="text"
                            v-model.trim="form.email"
                            class="blo\ck border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            type="password"
                            v-model.trim="form.password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />

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
import Nav from '@/components/Nav'
export default {
    components:{Nav},
    data(){
        return {
            form:{
                name: 'test',
                email: 'test@gmail.com',
                password: 'password',
                password_confirmation: 'password',
            }
        }
    },
    methods:{
        async submit(){
            try{
                await this.$axios.$post('register', this.form)
                await this.$auth.login({
                    data: {
                        email: this.form.email,
                        password: this.form.password,
                    }
                })

                // redirect
                this.$router.push({
                    path: this.$route.query.redirect || '/home'
                })
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2">
                <div class="px-6 w-full">

                    <h1 class="mb-8 text-3xl text-center">会員登録</h1>
                    
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
                        <input 
                            type="password"
                            v-model.trim="form.password_confirmation"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <div class="mb-3">
                            <div class="form-check">
                                <div>
                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                        <a
                                            @click="openPDF('terms-of-use.pdf')"
                                            class="text-indigo-700 underline font-semibold"
                                            >利用規約</a> に同意する
                                    </label>
                                </div>
                                <div>
                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                        <a  
                                            class="text-indigo-700 underline font-semibold" 
                                            @click="openPDF('privacy-policy.pdf')">
                                                プライバシーポリシー
                                            </a> に同意する                                
                                    </label>
                                </div>
                            </div>
                        </div>  

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-register text-white hover:bg-green-dark focus:outline-none my-1"
                        >登録する</button>        
                    </form>
                    <div class="text-grey-dark mt-6">
                        アカウントを持っている方は<nuxt-link to='/login' class="text-indigo-700 font-semibold">こちら</nuxt-link>から。                    
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
            },
        }
    },
    methods:{

        openPDF(path){
            const url = 'http://localhost:3000/file/';
            window.open(url+path, '_blank');
        },

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
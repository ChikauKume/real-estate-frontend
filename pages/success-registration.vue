<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2">
                <div class="px-6 w-full">

                    <h1 class="mb-6 text-3xl text-center">会員登録</h1>

                    <div class="text-center my-4">
                        会員登録が完了いたしました。
                    </div>

                    <div>
                        <button
                            type="button"
                            @click="redirect"
                            class="w-full text-center font-semibold py-3 rounded bg-navy-blue text-white my-1"
                        >ログインする</button>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
        loading: false,
        otp: '',
        text: '',
    }),
    methods: {

        redirect(){
            try{
                this.$router.push({
                    path: '/login',
                })
            }
            catch(err){
                console.log('error',err)
            }
        }
    },
  }
</script>
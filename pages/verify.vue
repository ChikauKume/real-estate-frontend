<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <div class="container max-w-md mx-auto flex-1 flex flex-col mt-10 px-2">
                <div class="px-6 w-full">

                    <h1 class="mb-6 text-3xl text-center">会員登録</h1>

                    <div class="errors my-4 text-red-700 text-left">
                        <div v-if="errors.error">{{ errors.error[0] }}</div>
                    </div>

                    <div class="text-center my-4">
                        SMSにて送信された認証コードを入力してください
                    </div>

                    <div>
                        <div>
                            <v-otp-input
                                v-model="otp"
                                :disabled="loading"
                                @finish="onFinish"
                            />
                            <v-overlay absolute :value="loading">
                                <v-progress-circular
                                indeterminate
                                color="primary"
                            />
                            </v-overlay>
                        </div>
                        <div>
                            <button
                                type="button"
                                @click="resendSMS"
                                class="w-full text-center font-semibold py-3 rounded bg-dark-gray text-white my-1"
                            >SMSメッセージを再送</button>   
                        </div>
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

      async onFinish (rsp) {
        try{
            this.loading = true

            const res = await this.$axios.$post('/verification',
            {email:this.$route.query.email, otp:this.otp})

            this.loading = false

            this.$router.push({
                path: '/success-registration',
            })
        }
        catch(err){
            console.log('error',err)
            this.loading = false
        }
      },

      async resendSMS(){
        try{
            const $email = this.$route.query.email
            const $phone = this.$route.query.phone

            const form = {
                'email' : $email,
                'phone' : $phone,
            }
            const res = await this.$axios.$post('/sendSMS',form)
        }
        catch(err){
            console.log('error',err)
        }
      }
    },
  }
</script>
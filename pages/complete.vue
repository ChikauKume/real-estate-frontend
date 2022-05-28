<template>
  <div>
    <div class="w-5/6 mx-auto">
        <div class="flex items-center justify-center space-x-2">
            <v-icon class="text-4xl text-navy-blue">mdi-email-outline</v-icon>
            <h1 class="my-6 text-3xl text-center">お問い合わせ</h1>
        </div>
        <div class="w-full py-6 flex">
            <div class="flex justify-center items-center">
                <div class="w-1/4">
                <div class="relative mb-2">
                    <div class="w-10 h-10 mx-auto bg-navy-blue rounded-full text-lg text-white flex">
                        <v-icon class="flex justify-center text-white">mdi-file-table-outline</v-icon>
                    </div>
                </div>

                <div class="text-xs text-center md:text-base">フォームを入力</div>
                </div>

                <div class="w-1/4">
                <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                    <div class="w-full bg-navy-blue rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-green-300 py-1 rounded" style="width: 100%;"></div>
                    </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-navy-blue border-2 border-navy-blue rounded-full text-lg text-white flex items-center">
                        <v-icon class="flex justify-center text-white">mdi-format-list-checks</v-icon>
                    </div>
                </div>

                <div class="text-xs text-center md:text-base">内容を確認</div>
                </div>

                <div class="w-1/4">
                <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                    <div class="w-full bg-navy-blue rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-navy-blue py-1 rounded" style="width: 0%;"></div>
                    </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-navy-blue border-2 border-navy-blue rounded-full text-lg text-white flex items-center">
                    <span class="text-center text-navy-white w-full">
                        <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                        </svg>
                    </span>
                    </div>
                </div>

                <div class="text-xs text-center md:text-base">完　了</div>
                </div>
            </div>
        </div>

        <form class="px-10 py-5 border-solid border-gray border rounded">
            <div class="rounded px-4 mb-5">
                <div class="flex space-x-3 text-green-700 border border-solid px-4 py-2 rounded my-6">
                    <v-icon class="text-green-700 text-2xl">mdi-checkbox-marked-circle-outline</v-icon>
                    <div class="flex flex-col font-semibold">
                        <span>お問い合わせの送信が完了いたしました</span>
                        <span>後日、{{form.email}}宛にメールが送信されますのでお待ちください</span>
                    </div>
                </div>
                <button 
                    type="button"
                    class="font-semibold 
                    text-white
                    w-full bg-orange 
                    text-center p-3 rounded"
                    @click= "goToTop"
                >トップ画面に戻る
                </button>     
            </div>    
        </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form:{
            name: '山田 太郎',
            kana: 'ヤマダ タロウ',
            email: 'test@gmail.com',
            phone: '0312345678',
        }
      }
    },
    methods: {
        goToTop(){
            this.$router.push({
                path: '/'
            })
        }
    },
  }
</script>
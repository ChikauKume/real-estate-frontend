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
                    <div class="w-full bg-gray rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-green-300 py-1 rounded" style="width: 100%;"></div>
                    </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-white border-2 border-navy-blue rounded-full text-lg text-white flex items-center">
                        <v-icon class="flex justify-center text-navy-blue">mdi-format-list-checks</v-icon>
                    </div>
                </div>

                <div class="text-xs text-center md:text-base">内容を確認</div>
                </div>

                <div class="w-1/4">
                <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                    <div class="w-full bg-gray rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-green-300 py-1 rounded" style="width: 0%;"></div>
                    </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-white border-2 border-navy-blue rounded-full text-lg text-white flex items-center">
                    <span class="text-center text-navy-blue w-full">
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
            <div class="rounded p-4 mb-5">
                <div>
                    <div class="pb-4 flex space-x-4 items-center">
                        <span 
                        class="bg-navy-blue text-white text-bold 
                        text-xs p-2 rounded">新築マンション</span>
                        <nuxt-link class="text-indigo-700 underline font-semibold text-lg justify-center" to="/details">レジデンス白潟 A000B/ 2階</nuxt-link>
                    </div>
                    <div class="flex">
                        <img src="/image/first-view.jpeg" class="w-1/3 rounded">
                        <div class="desc pl-4 w-full">
                            <table class="table-auto w-full">
                                <tbody>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-xs px-4">賃料/管理費等</td>
                                        <td class="border border-gray text-sm px-4 py-2 font-extrabold text-red-700">8.5万</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-xs px-4 py-2">所在地</td>
                                        <td class="border border-gray text-sm px-4 py-2">島根県松江市菅田町332-3</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-xs px-4 py-2">交通</td>
                                        <td class="border border-gray text-sm px-4 py-2">JR山陰本線 松江駅 徒歩10分</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-xs px-4 py-2">専有面積/間取り</td>
                                        <td class="border border-gray text-sm px-4 py-2">18.15m² / 1K</td>
                                    </tr>       
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-xs px-4 py-2">築年数</td>
                                        <td class="border border-gray text-sm px-4 py-2">15年</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="desc px-4 w-full">
                    <table class="w-full mb-10">
                        <tbody>
                            <tr>
                                <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">お名前</td>
                                <td class="border border-gray text-sm px-4 text-red-700">
                                    <v-text-field
                                        v-model.trim="form.name"
                                        placeholder='例 : 山田太郎'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-light-gray border border-gray font-semibold px-4">お名前 (カナ)</td>
                                <td class="border border-gray text-sm px-4 text-red-700">
                                    <v-text-field
                                        v-model.trim="form.kana"
                                        placeholder='例 : ヤマダタロウ'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-light-gray border border-gray font-semibold px-4">メールアドレス</td>
                                <td class="border border-gray text-sm px-4">
                                    <v-text-field
                                        v-model.trim="form.email"
                                        placeholder='例 : taroyamada@gmail.com'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-light-gray border border-gray font-semibold px-4">電話番号</td>
                                <td class="border border-gray text-sm px-4">
                                    <v-text-field
                                        v-model.trim="form.phone"
                                        placeholder='例 : 0312345678 (ハイフン不要)'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button 
                        type="button"
                        class="font-semibold 
                        text-white
                        w-full bg-orange 
                        text-center p-3 rounded"
                        @click= "goToConfirm"

                    >確認画面へ進む
                    </button> 
                </div>
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
        goToConfirm(){
            this.$router.push({
                path: '/confirm'
            })
        }
    },
  }
</script>
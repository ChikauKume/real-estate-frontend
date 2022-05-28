<template>
    <div class="w-5/6 mx-auto">
        <div>
            <ul class="flex space-x-2 items-center">
                <nuxt-link to="/" class="text-indigo-700 text-sm font-semibold underline">ホーム</nuxt-link>
                <li>></li>
                <nuxt-link class="text-indigo-700 text-sm font-semibold underline" to="/details">レジデンス白潟 A000B/ 2階</nuxt-link>
            </ul>
        </div>
        <div class="flex justify-start space-x-3 items-center header-bar border-navy-blue border-soliid border-t-2 w-full my-4 flex justify-center h-full p-3 shadow-lg">
            <span 
            class="bg-navy-blue text-white 
            text-sm p-2 rounded font-semibold">新築マンション</span>
            <div class="text-xl py-2 flex justfy-start">レジデンス白潟 A000B/ 2階</div>
        </div>
        <div class="p-12 border-solid border-gray border shadow-lg">
       
            <v-carousel cycle class="rounded-lg" :show-arrows="false">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>

            <div class="rounded my-10">
                <div>
                    <div class="flex">
                        <div class="desc w-full">
                            <table class="table-auto w-full">
                                <tbody>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-sm px-4 py-2 w-1/4">賃料/管理費等</td>
                                        <td class="border border-gray text-sm px-4 py-2 font-extrabold text-red-700">8.5万</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-sm px-4 py-2">所在地</td>
                                        <td class="border border-gray text-sm px-4 py-2">島根県松江市菅田町332-3</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-sm px-4 py-2">交通</td>
                                        <td class="border border-gray text-sm px-4 py-2">JR山陰本線 松江駅 徒歩10分</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-sm px-4 py-2">専有面積/間取り</td>
                                        <td class="border border-gray text-sm px-4 py-2">18.15m² / 1K</td>
                                    </tr>       
                                    <tr>
                                        <td class="bg-light-gray border border-gray text-sm px-4 py-2">築年数</td>
                                        <td class="border border-gray text-sm px-4 py-2">15年</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                class="font-semibold 
                text-white
                w-full bg-orange 
                text-center p-3 rounded"
                @click= "goToInquiry"

            >お問い合わせはこちら
            </button>  

        </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form:{
            email: 'test@gmail.com',
            address: 'address',
        },
         items: [
          {
            src: '/image/first-view.jpeg',
          },
          {
            src: '/image/structure.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
    methods: {
        goToInquiry(){
            this.$router.push({
                path: '/inquiry'
            })
        }
    },
  }
</script>
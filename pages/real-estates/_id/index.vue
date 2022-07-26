<template>
    <div class="p-5">
        <div v-if="isExpired">こちらの物件は既に掲載終了しております</div>
        <div v-else>
            <div class="flex items-center justify-between mb-5">
                <div class="text-2xl">{{name}}</div>
                <div>掲載期間 {{expiration_date}} まで</div>
            </div>
            <div class="flex items-center space-x-5 w-1/2">
                <div 
                    class="bg-navy-blue text-white text-extrabold
                    text-xs p-2 rounded">
                    {{type}} {{layout}}
                </div>
                <div class="flex items-center justify-end space-x-3 w-1/4">
                    <div>お気に入り人数 : {{likes}}</div>
                    <div v-if="isLiked" @click.prevent="toggle(id, false)" class="border-solid font-bold bg-navy-blue text-white flex items-center space-x-2 border-2 p-2 justify-center w-1/5 rounded">
                        <fa :icon="['far','thumbs-up']" class="text-navy-blue-600"/>
                        <div>いいね！</div>
                    </div>
                    <div v-else @click.prevent="toggle(id, true)" class="border-solid flex items-center space-x-2 border-2 p-2 justify-center w-1/5 rounded">
                        <fa :icon="['far','thumbs-up']" class="text-navy-blue-600" />
                        <div>いいね！</div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-6 mb-6 mt-6">
                <div class="w-full">
                    <div v-if="images">
                        <v-carousel class="rounded-lg max-w-lg bg-auto" height="auto" :show-arrows="false">
                            <v-carousel-item
                            v-for="(image,i) in images"
                            :key="i"
                            :src="baseImageUrl+image.name"
                            ></v-carousel-item>
                        </v-carousel>

                        <div class="flex flex-wrap mt-3">
                            <div v-for="(image, index) in images" :key='index' class="w-1/5 p-1">
                                <img :src="baseImageUrl+image.name" class="rounded h-16 border border-solid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div>
                        <div class="flex space-x-2 mb-3">
                            <div>売主希望価格</div>
                            <div class="text-red-700 text-xl font-bold" v-if="bill">{{bill}}万円</div>
                        </div>
                    </div>
 
                    <div class="text-base">基本情報</div>

                    <div class="my-4 border-l-2 border-dark-gray pl-2 text-sm">
                        <div class="flex space-x-2 my-2">
                            <div>物件名：</div>
                            <div>{{name}}</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>所在地：</div>
                            <div>〒{{zipcode}}</div>
                            <div>{{address1}}{{address2}}{{address3}}{{address4}}</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>家賃：</div>
                            <div>{{bill}}円</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>交通：</div>
                            <div>{{transportation}}</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>構造：</div>
                            <div>{{structure}}</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>土地面積：</div>
                            <div>{{land_area}} ㎡</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>建物面積：</div>
                            <div>{{building_area}} ㎡</div>
                        </div>
                        <div class="flex space-x-2 my-2">
                            <div>間取り：</div>
                            <div>{{layout}}</div>
                        </div>
                        <div class="flex flex-wrap space-x-2 my-4">
                            <div>その他：</div>
                            <div class="text-xs mt-1">
                                {{remarks}}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5">
                            <div class="text-base">希望価格を入力</div>
                            <div class="flex pl-2 items-center space-x-2">
                                <div class="flex items-center space-x-3">
                                    <v-text-field
                                        v-model.trim="bill"
                                        placeholder='例 : 100000'
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        oninput="validity.valid||(value='');"
                                    />
                                    <div class="w-1/2">万円</div>
                                </div>
                                <button
                                    type="submit"
                                    class=" w-1/2 py-2 text-center font-semibold rounded bg-orange text-white hover:bg-green-dark focus:outline-none"
                                >希望価格を送信</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="text-base my-4">よくある質問</div>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            {{ question1 }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ answer1 }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            {{ question2}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ answer2 }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            {{ question3 }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ answer3 }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            {{ question4 }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ answer4 }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            {{ question5 }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ answer5 }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
import RealEstateValidation from '@/components/RealEstateValidation'

export default {
    props: {
        value: String,
    },
    component:{
        RealEstateValidation
    },
    data () {
        return {
            id: '',
            name: '',
            images: [],
            old_images: [],
            bill: null,
            zipcode: '',
            address1: '',
            address2: '',
            address3: '',
            address4: '',
            lat: null,
            lng: null,
            transportation: '',
            land_area: null,
            building_area: null,
            real_estate_prefecture_id: null,
            type: null,
            layout: null,
            structure: null,
            pic: null,
            email: null,
            age: null,
            question1: null,
            question2: null,
            question3: null,
            question4: null,
            question5: null,
            answer1: null,
            answer2: null,
            answer3: null,
            answer4: null,
            answer5: null,
            expiration_date: null,
            remarks: null,
            favorite: null,
            baseImageUrl : 'https://gna-real-estate.s3.ap-northeast-1.amazonaws.com/realestates/',
            likes: null,
            isExpired: false,
            thumbsup: false,
            isLiked: false
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        async getData(){
            try{
                const res = await this.$axios.$get('/real-estates/'+ this.$route.params.id)

                let imageData = res.data.image.split(',')
                let arr = []

                for(let i=0; i<imageData.length; i++){
                    let obj = {}
                    obj.name = imageData[i]
                    this.images.push(obj)
                    arr.push(imageData[i])
                    this.old_images = arr
                }
                
                this.id = res.data.id
                this.name = res.data.name
                this.bill = res.data.bill.toLocaleString()
                this.zipcode = res.data.zipcode
                this.address1 = res.data.address1
                this.address2 = res.data.address2
                this.address3 = res.data.address3
                this.address4 = res.data.address4
                this.lat = res.data.lat
                this.lng = res.data.lng
                this.transportation = res.data.transportation
                this.land_area = res.data.land_area
                this.building_area = res.data.building_area
                this.real_estate_prefecture_id = res.data.real_estate_prefecture_id
                this.type = res.data.type.type
                this.layout = res.data.layout.name
                this.structure = res.data.structure.name
                this.pic = res.data.pic
                this.email = res.data.email
                this.age = res.data.age
                this.question1 = res.data.question1
                this.question2 = res.data.question2
                this.question3 = res.data.question3
                this.question4 = res.data.question4
                this.question5 = res.data.question5
                this.answer1 = res.data.answer1
                this.answer2 = res.data.answer2
                this.answer3 = res.data.answer3
                this.answer4 = res.data.answer4
                this.answer5 = res.data.answer5
                this.expiration_date = res.data.expiration_date
                this.remarks = res.data.remarks
                this.likes = res.data.likes
                this.favorite = res.data.favorite
                this.isLiked = res.data.isLiked

                this.checkExpirationDateTime(res)
                console.log(res.data)
            }
           catch(err){
                console.log(err)
            }
        },
        checkExpirationDateTime(res){
            const currentDateTime = res.data.current_datetime
            const expiredDateTime = res.data.expiration_date
            if(expiredDateTime < currentDateTime){
                this.isExpired = true
            }
        },
        async toggle(real_estate_id, isLiked){
            if(this.$auth.user){
                const data = {
                    'user_id': this.$auth.user.data.id,
                    'real_estate_id': real_estate_id
                }
                if(isLiked){
                    const res = await this.$axios.$post('/real-estates/like', data)
                    this.likes += 1
                }
                else{
                    const res = await this.$axios.$post('/real-estates/unlike', data)
                    this.likes -= 1
                }
                this.isLiked = !this.isLiked
            }
            else{
                alert('need to login')
            }
        },
    },
}
</script>
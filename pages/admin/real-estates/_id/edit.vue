<template>
    <div class="p-10">
        <div class="text-2xl mb-5">不動産編集</div>

        <RealEstateValidation :errors = errors />

        <table class="mb-10 w-5/6">
            <tbody>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">名　称</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.name"
                            placeholder='例 : 〇〇ビル'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">写　真</td>
                    <td class="border border-gray text-sm px-3 py-2">
                        <div class="flex flex-column">
                            <input 
                                type="file" 
                                @change="fileSelect"
                                class="text-black"
                                style="display:none"
                                ref="fileInput"
                                accept="image/*"
                            >
                            <div v-if="form.images" class="flex flex-wrap">
                                <div v-for="(image, index) in form.images" :key='index'>
                                    <div class="m-2">
                                        <img v-if="image.thumnail" :src="image.thumnail" class="rounded" style="width:170px; height:120px;" />
                                        <img v-else :src="baseImageUrl+image.name" class="rounded" style="width:170px; height:120px;" />
                                        
                                        <button 
                                            @click="form.images.splice(index, 1)" 
                                            class="
                                            text-white
                                            text-sm
                                            font-semibold
                                            bg-red-500
                                            p-1
                                            rounded
                                            my-1
                                            flex items-center justify-center"
                                            style="width:170px;"
                                        >
                                            <span>削 除</span>
                                            <v-icon
                                                right
                                                class="text-white text-sm"
                                            >
                                                mdi-delete
                                            </v-icon>
                                        </button>
                                    </div>
                                </div>
                                <!-- <button @click="submitImage">Submit image</button> -->
                            </div>
                            <v-btn
                            color="blue-grey"
                            class="my-4 mx-2 white--text font-bold w-1/3"
                            @click="upload"
                            >
                                <span v-if="form.images">画像を追加</span>
                                <v-icon
                                    right
                                    dark
                                >
                                    mdi-cloud-upload
                                </v-icon>
                            </v-btn>
                            <span class="text-sm">※ 1番目がトップの画像になります</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">郵便番号</td>
                    <td class="border-r border-gray text-sm px-4">
                        <div class="w-1/2 flex items-center">
                            <v-text-field
                                v-model.trim="form.zipcode"
                                placeholder='例 : 0312345678 (ハイフン不要)'
                                min="0"
                                oninput="validity.valid||(value='');"
                            />
                            <v-btn
                                color="blue-grey"
                                class="
                                    ma-2
                                    white--text
                                    font-bold y-2
                                    mx-10
                                    w-1/3"
                            >
                                住所検索
                                <v-icon
                                    right
                                    dark
                                >
                                    mdi-magnify
                                </v-icon>
                            </v-btn>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">住　所　1<br>県　名</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.address1"
                            placeholder='例 : 〇〇県'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">
                        住　所　2<br>市区町村（行政区名）
                    </td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.address2"
                            placeholder='例 : 〇〇市'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">
                        住　所　3<br>町域名・番地
                    </td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.address3"
                            placeholder='例 : 〇〇町'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">
                        住　所　4<br>ビル名ほか
                    </td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.address4"
                            placeholder='例 : 〇〇マンション　〇〇号室'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">緯度 / 経度</td>
                    <td class=" border-r border-gray text-sm px-4 flex space-x-5 py-5">
                        <div class="flex items-center space-x-3">
                            <div class="bg-light-gray border border-gray font-semibold px-4 my-4">緯 度</div>
                            <v-text-field
                                v-model.trim="form.lat"
                                placeholder='例 : 35.212423'
                                type="number"
                                step="0.000000000000001"
                                min="0"
                                oninput="validity.valid||(value='');"
                            />
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-light-gray border border-gray font-semibold px-4">経 度</div>
                            <v-text-field
                                v-model.trim="form.lng"
                                placeholder='例 : 135.12321'
                                type="number"
                                step="0.000000000000001"
                                min="0"
                                oninput="validity.valid||(value='');"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">家賃・販売価格</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.bill"
                            placeholder='例 : 100000'
                            type="number"
                            min="0"
                            step="0.01"
                            oninput="validity.valid||(value='');"
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">交　通</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.transportation"
                            placeholder='例 : 〇〇駅から徒歩5分'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">土地面積 (㎡)</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.land_area"
                            placeholder='例 : 20.5'
                            type="number"
                            min="0"
                            step="0.01"
                            oninput="validity.valid||(value='');"
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">建物面積 (㎡)</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.building_area"
                            placeholder='例 : 20.5'
                            type="number"
                            min="0"
                            step="0.01"
                            oninput="validity.valid||(value='');"
                        />
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">物件種別</td>
                    <td class="border border-gray text-sm">
                        <select v-model.trim="form.type"
                            class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                            <option 
                                v-for="type in types" 
                                :key="type.id" 
                                :value="type.id">
                                {{type.type}} {{type.name}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">間取り</td>
                    <td class="border border-gray text-sm">
                        <select v-model.trim="form.layout"
                            class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                            <option 
                                v-for="layout in layouts" 
                                :key="layout.id"
                                :value="layout.id"
                            >{{layout.name}}</option>
                        </select>
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">構造</td>
                    <td class="border border-gray text-sm">
                        <select v-model.trim="form.structure"
                            class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                            <option 
                                v-for="structure in structures" 
                                :key="structure.id" 
                                :value="structure.id">
                                    {{structure.name}}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">築年数</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.age"
                            placeholder='例 : 10'
                            type="number"
                            min="0"
                            oninput="validity.valid||(value='');"
                        />
                    </td>
                </tr>
                                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">その他</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-textarea
                            v-model.trim="form.remarks"
                            placeholder='例 : バストイレ別、バルコニー、フローリング、室内洗濯置、陽当り良好、南向き、角住戸、洗面所独立、2口コンロ、押入、閑静な住宅地、保証人不要、二人入居相談、2沿線利用可、緑豊かな住宅地、眺望良好、クロゼット2ヶ所'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">よくある質問</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <div class="flex space-x-8">
                            <v-text-field
                                v-model.trim="form.question1"
                                label="質問 1"
                            />
                            <v-text-field
                                v-model.trim="form.answer1"
                                label="回答 1"
                            />
                        </div>
                        <div class="flex space-x-8">
                            <v-text-field
                                v-model.trim="form.question2"
                                label="質問 2"
                            />
                            <v-text-field
                                v-model.trim="form.answer2"
                                label="回答 2"
                            />
                        </div>
                        <div class="flex space-x-8">
                            <v-text-field
                                v-model.trim="form.question3"
                                label="質問 3"
                            />
                            <v-text-field
                                v-model.trim="form.answer3"
                                label="回答 3"
                            />
                        </div>
                        <div class="flex space-x-8">
                            <v-text-field
                                v-model.trim="form.question4"
                                label="質問 4"
                            />
                            <v-text-field
                                v-model.trim="form.answer4"
                                label="回答 4"
                            />
                        </div>
                        <div class="flex space-x-8">
                            <v-text-field
                                v-model.trim="form.question5"
                                label="質問 5"
                            />
                            <v-text-field
                                v-model.trim="form.answer5"
                                label="回答 5"
                            />
                        </div>

                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">担当者</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.pic"
                            placeholder='例 : 山田太郎'
                        />
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">連絡先メールアドレス</td>
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-text-field
                            v-model.trim="form.email"
                            placeholder='例 : sample@example.com'
                        />
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">おすすめ度</td>
                    <td class="border border-gray text-sm">
                        <select v-model.trim="form.favorite"
                            class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mt-5 w-1/2 flex justify-center">
            <button 
                type="button"
                @click="update"
                class="
                flex justify-center
                w-full
                font-semibold 
                text-white
                bg-orange 
                text-center p-3 rounded"
            >
            上記の内容で更新する
            </button> 
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
    layout: "dashboard",
    data () {
        return {
            form:{
                'id': '',
                'name': '',
                'images': [],
                'old_images': [],
                'bill': null,
                'zipcode': '',
                'address1': '',
                'address2': '',
                'address3': '',
                'address4': null,
                'lat': null,
                'lng': null,
                'transportation': '',
                'land_area': null,
                'building_area': null,
                'real_estate_prefecture_id': null,
                'type': null,
                'layout': null,
                'structure': null,
                'remarks': '',
                'question1': null,
                'question2': null,
                'question3': null,
                'question4': null,
                'question5': null,
                'answer1': null,
                'answer2': null,
                'answer3': null,
                'answer4': null,
                'answer5': null,
                'expiration_date': null,
                'pic': null,
                'email': null,
                'age': null,
                'favorite': null,
            },
            image: null,
            layouts: [],
            types: [],
            structures: [],
            baseImageUrl : 'https://gna-real-estate.s3.ap-northeast-1.amazonaws.com/realestates/'
        }
    },
    mounted(){
        this.getTypeLayoutStructure()
        this.getData();
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
                    this.form.images.push(obj)
                    arr.push(imageData[i])
                    this.form.old_images = arr
                }
                
                let form = this.form
                Object.keys(res.data).forEach(function (key) {
                    if(key == "type" || key == "layout" || key == "structure"){
                        form[key] = res.data[key].id
                    }
                    else{
                        form[key] = res.data[key]
                    }
                });
            }
           catch(err){
                console.log(err)
            }
        },
        async update(){
            try{
                let fd = new FormData()
                let form = this.form

                for(let i=0; i<form.images.length; i++){
                    fd.append('images[]', form.images[i].uploadFile)
                    fd.append('old_images[]', form.images[i].name)
                }

                fd.append('id', this.form.id)
                fd.append('name', this.form.name)
                fd.append('bill', this.form.bill)
                fd.append('zipcode', this.form.zipcode)
                fd.append('address1', this.form.address1)
                fd.append('address2', this.form.address2)
                fd.append('address3', this.form.address3)
                fd.append('address4', this.form.address4)
                fd.append('lat', this.form.lat)
                fd.append('lng', this.form.lng)
                fd.append('transportation', this.form.transportation)
                fd.append('land_area', this.form.land_area)
                fd.append('building_area', this.form.building_area)
                fd.append('real_estate_prefecture_id', this.form.real_estate_prefecture_id)
                fd.append('type', this.form.type)
                fd.append('layout', this.form.layout)
                fd.append('structure', this.form.structure)
                fd.append('age', this.form.age)
                fd.append('remarks', this.form.remarks)
                fd.append('question1', this.form.question1)
                fd.append('question2', this.form.question2)
                fd.append('question3', this.form.question3)
                fd.append('question4', this.form.question4)
                fd.append('question5', this.form.question5)
                fd.append('answer1', this.form.answer1)
                fd.append('answer2', this.form.answer2)
                fd.append('answer3', this.form.answer3)
                fd.append('answer4', this.form.answer4)
                fd.append('answer5', this.form.answer5)
                fd.append('remarks', this.form.remarks)
                fd.append('expiration_date', this.form.expiration_date)
                fd.append('pic', this.form.pic)
                fd.append('email', this.form.email)
                fd.append('favorite', this.form.favorite)

                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }

                const res = await this.$axios.$post('/real-estates/update', fd, config)
                console.log('res', res)


                this.$router.push({
                    path: '/admin/real-estates',
                    query :{ success_message: '物件の更新が完了いたしました'},
                })

            }
            catch(err){
                console.log(err)
            }

        },
        async getTypeLayoutStructure(){
            try {
                const res = await this.$axios.$get('/real-estates/type-layout-structure')
                this.layouts = res.layout
                this.types = res.type
                this.structures = res.structure
                console.log(res)
            }
            catch(err){
                console.log('error',err)
            }
        },
        fileSelect(e){
            let files = e.target.files || e.dataTransfer.files;
            this.image = e.target.files[0]
            this.createImage(files[0])
        },
        createImage(file){
            let reader = new FileReader();
            let vm = this.form;
            let obj = {};
            reader.onload = function(e) {
                obj.thumnail = e.target.result;
                obj.uploadFile = file;
                obj.name = '';
                vm.images.push(obj);
            };
            reader.readAsDataURL(file);
        },
        upload(){
            this.$refs.fileInput.click()
        },
    },
}
</script>
<template>
    <div class="p-10">
        <div class="text-2xl mb-5">不動産追加</div>
        <table class="w-5/6 mb-10">
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
                    <td class="border border-gray text-sm px-4 text-red-700">
                        <v-file-input
                            multiple
                            chips
                            label="File input"
                        ></v-file-input>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">郵便番号</td>
                    <td class="border border-gray text-sm px-4 flex items-center">
                        <v-text-field
                            v-model.trim="form.zipcode"
                            placeholder='例 : 0312345678 (ハイフン不要)'
                        />
                        <button 
                            class="search-address 
                            hover:cursor 
                            border-solid
                            border-2 
                            border-gray
                            rounded
                            px-16
                            py-2
                            mx-10"
                        >
                            住所検索
                        </button>
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
                    <td class="border border-gray text-sm px-4 flex space-x-5 py-5">
                        <div class="flex items-center space-x-3">
                            <td class="bg-light-gray border border-gray font-semibold px-4 my-4">緯 度</td>
                            <v-text-field
                                v-model.trim="form.lat"
                                placeholder='例 : 35.212423'
                            />
                        </div>
                        <div class="flex items-center space-x-3">
                            <td class="bg-light-gray border border-gray font-semibold px-4">経 度</td>
                            <v-text-field
                                v-model.trim="form.lng"
                                placeholder='例 : 135.12321'
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">家　賃 (円/月)</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.bill"
                            placeholder='例 : 100,000'
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
                    <td class="bg-light-gray border border-gray font-semibold px-4">専有面積 (㎡)</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.area"
                            placeholder='例 : 20.5'
                        />
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">間取り</td>
                    <select v-model.trim="form.layout"
                        class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                        <option value="1">ワンルーム</option>
                        <option value="2">1K</option>
                        <option value="3">1DK</option>
                        <option value="4">1LDK</option>
                        <option value="5">2K</option>
                        <option value="6">2DK</option>
                        <option value="7">2LDK</option>
                        <option value="8">3K</option>
                        <option value="9">3DK</option>
                        <option value="10">3LDK</option>
                        <option value="11">4K</option>
                        <option value="12">4DK</option>
                        <option value="13">4LDK</option>
                        <option value="14">5K以上</option>
                    </select>
                </tr>
                <tr>
                    <td class="bg-light-gray border border-gray font-semibold px-4">築年数</td>
                    <td class="border border-gray text-sm px-4">
                        <v-text-field
                            v-model.trim="form.age"
                            placeholder='例 : 10'
                        />
                    </td>
                </tr>
                <tr class="border-gray border-solid border">
                    <td class="bg-light-gray border border-gray font-semibold px-4">おすすめ度</td>
                    <select v-model.trim="form.favorite"
                        class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    data () {
        return {
            form:{
                'name': '',
                'image': '',
                'bill': '',
                'zipcode': '',
                'address1': '',
                'address2': '',
                'address3': '',
                'address4': '',
                'lat': '',
                'long': '',
                'transportation': '',
                'area': '',
                'real_estate_type_id': '',
                'real_estate_layout_id': '',
                'age': '',
                'favorite': 1,
            }
        }
    },
    methods: {
        create(item) {
            console.log(`${item.name}:${item.price}`);
        },
    }
}
</script>
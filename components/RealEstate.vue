<template>
    <table class="mb-10 w-5/6">
        <tbody>
            <tr>
                <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">名　称</td>
                <td class="border border-gray text-sm px-4 text-red-700">
                    <v-text-field
                        v-model.trim="name"
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
                        <div v-if="images" class="flex flex-wrap">
                            <div v-for="(image, index) in images" :key='index'>
                                <div class="m-2">
                                    <img :src="image.thumnail" class="rounded" style="width:170px; height:120px;" />
                                    <button 
                                        @click="images.splice(index, 1)" 
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
                            <span v-if="images">画像を追加</span>
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
                            v-model.trim="zipcode"
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
                            @click="getAddress"
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
                        v-model.trim="address1"
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
                        v-model.trim="address2"
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
                        v-model.trim="address3"
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
                        v-model.trim="address4"
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
                            v-model.trim="lat"
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
                            v-model.trim="lng"
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
                <td class="bg-light-gray border border-gray font-semibold px-4">家　賃 (円/月)</td>
                <td class="border border-gray text-sm px-4">
                    <v-text-field
                        v-model.trim="bill"
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
                        v-model.trim="transportation"
                        placeholder='例 : 〇〇駅から徒歩5分'
                    />
                </td>
            </tr>
            <tr>
                <td class="bg-light-gray border border-gray font-semibold px-4">専有面積 (㎡)</td>
                <td class="border border-gray text-sm px-4">
                    <v-text-field
                        v-model.trim="area"
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
                    <select v-model.trim="type"
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
                    <select v-model.trim="layout"
                        class="border-solid border-gray border px-4 m-4 py-1 rounded text-sm">
                        <option 
                            v-for="layout in layouts" 
                            :key="layout.id"
                            :value="layout.id"
                        >{{layout.name}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="bg-light-gray border border-gray font-semibold px-4">築年数</td>
                <td class="border border-gray text-sm px-4">
                    <v-text-field
                        v-model.trim="age"
                        placeholder='例 : 10'
                        type="number"
                        min="0"
                        oninput="validity.valid||(value='');"
                    />
                </td>
            </tr>
            <tr>
                <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">担当者</td>
                <td class="border border-gray text-sm px-4 text-red-700">
                    <v-text-field
                        v-model.trim="pic"
                        placeholder='例 : 山田太郎'
                    />
                </td>
            </tr>
            <tr>
                <td class="bg-light-gray border border-gray font-semibold px-4 w-1/4">連絡先メールアドレス</td>
                <td class="border border-gray text-sm px-4 text-red-700">
                    <v-text-field
                        v-model.trim="email"
                        placeholder='例 : sample@example.com'
                    />
                </td>
            </tr>
            <tr class="border-gray border-solid border">
                <td class="bg-light-gray border border-gray font-semibold px-4">おすすめ度</td>
                <td class="border border-gray text-sm">
                    <select v-model.trim="favorite"
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
</template>
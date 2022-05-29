<template>
    <div class="main">
        <div class="mb-5 py-4 px-4">
            <hr class="navy-blue h-1 mb-5">
            <div class="search_result flex my-3">
                <div class="number_of_results w-1/4 flex justify-start items-center space-x-2">
                    <span class="flex text-sm">検索結果</span>
                    <span class="font-bold text-red-600 text-4xl">15</span>
                    <span class="flex text-sm">件</span>
                </div>
                <div class="flex w-full space-x-2">
                    <div class="sort flex items-center justify-end">
                        <label class="text-sm font-semibold">並び替え</label>
                    </div>
                    <select name="age" id="age"
                    class="border border-solid border-gray p-1 rounded text-sm">
                        <option value="0">指定しない</option>
                        <option value="1">新 築</option>
                        <option value="2">1年以内</option>
                        <option value="3">3年以内</option>
                        <option value="4">5年以内</option>
                        <option value="5">7年以内</option>
                        <option value="6">10年以内</option>
                        <option value="7">15年以内</option>
                        <option value="8">20年以内</option>
                        <option value="9">25年以内</option>
                        <option value="10">30年以内</option>
                    </select>
                </div>
            </div>
            <div class="rounded p-4 mb-5" v-for="data in realEstatesData" :key="data.id">
                <div>
                    <div class="pb-4 flex space-x-4 items-center">
                        <span 
                        class="bg-navy-blue text-white text-bold 
                        text-xs p-2 rounded">{{ data.type }}</span>
                        <nuxt-link class="text-indigo-700 underline font-semibold text-lg justify-center" to="/details">{{ data.name }}</nuxt-link>
                    </div>
                    <div class="flex">
                        <img :src="'/image/'+data.image"  class="w-1/3 rounded">
                        <div class="desc pl-4 w-full">
                            <table class="table-auto w-full">
                                <tbody>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">賃料/管理費等</td>
                                        <td class="border border-gray text-sm px-4 py-2 font-extrabold text-red-700">{{ data.bill }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">所在地</td>
                                        <td class="border border-gray text-sm px-4 py-2">{{ data.address }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">交通</td>
                                        <td class="border border-gray text-sm px-4 py-2">{{ data.transportation }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">専有面積/間取り</td>
                                        <td class="border border-gray text-sm px-4 py-2">{{ data.area }}m² / {{ data.layout}}</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    props: ['realEstatesData']
}
</script>
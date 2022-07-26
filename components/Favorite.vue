<template>
    <div class="main">
        <div class="mb-5 py-2 px-4">
            <div class="rounded my-5 mb-5" v-for="data in realEstatesData" :key="data.id">
                <div>
                    <div class="pb-4 flex space-x-4 items-center">
                        <span 
                        class="bg-navy-blue text-white text-extrabold
                        text-xs p-2 rounded">{{ data.type.type }} {{ data.type.name }}</span>
                        <nuxt-link class="font-semibold text-lg justify-center" to="/details">{{ data.name }}</nuxt-link>
                    </div>
                    <div class="flex">              

                        <img :src="baseImageUrl + (data.image).split(',')[0]"  class="w-1/4 h-1/3 rounded">
                        <div class="desc pl-4 w-full">
                            <table class="table-auto w-full">
                                <tbody>
                                    <tr>
                                        <td class="bg-light-gray border  border-gray text-xs px-4 py-2">賃料/管理費等</td>
                                        <td class="border border-gray text-sm px-4 py-2 font-extrabold text-red-700"><span class="font-bold">{{ data.bill }}</span>万円</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">所在地</td>
                                        <td class="border border-gray text-sm px-4 py-2">
                                            {{ data.address1 }}
                                            {{ data.address2 }}
                                            {{ data.address3 }}
                                            {{ data.address4 }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">交通</td>
                                        <td class="border border-gray text-sm px-4 py-2">{{ data.transportation }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light-gray border   border-gray text-xs px-4 py-2">専有面積/間取り</td>
                                        <td class="border border-gray text-sm px-4 py-2">{{ data.area }}m² / {{ data.layout.name}}</td>
                                    </tr>       
                                    <tr>
                                        <td></td>
                                        <td class="flex justify-end">
                                            <nuxt-link class="
                                                bg-navy-blue 
                                                text-white
                                                text-center
                                                text-extrabold 
                                                text-xs w-1/3
                                                p-2 
                                                mt-2
                                                rounded
                                            "
                                            to="/details">詳細を見る</nuxt-link>
                                        </td>
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
    props: [
        'realEstatesData',
        'baseImageUrl'
    ]
}
</script>
<template>
    <div class="header flex mt-5">
        <div class="map rounded">
            <GmapMap
                :center="maplocation"
                :options="options"
                :draggable="false"
                style="width: 600px; height: 500px"
                @click="infoWinOpen=false"
            >
                <GmapInfoWindow 
                    :options="infoOptions" 
                    :position="infoWindowPos"
                    :opened="infoWinOpen"
                    @closeclick="infoWinOpen=false"
                />

                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="false"
                    :icon="markerOptions"
                    @click="toggleInfoWindow(m,index)"
                    @mouseover="toggleInfoWindow(m,index)"
                />
            </GmapMap>
        </div>
        <div class="desc px-8">
            <div class="title text-3xl mb-5 flex">
                <img src="/image/home.png" class="rounded-md outline outline-1 w-1/6">
                <span class="flex items-center ml-5">住まいを探す</span>
            </div>
            <div class="pb-5">
                <div class="text-lg font-semibold">1.場所を選択</div>

                <div class="flex flex-col space-y-3 mt-3">

                    <div class="flex space-x-4 h-10">
                        <label for="shizuoka" class="flex items-center">愛　知　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-navy text-base rounded px-2"
                        @change="maplocation=owari">
                            <option value="0">地域を選択してください</option>
                            <option 
                                v-bind="owari"
                                value="1"
                            >
                            尾　張
                            </option>
                            <option value="2">名　古　屋</option>
                            <option value="3">西　三　河</option>
                            <option value="4">東　三　河</option>
                        </select>
                    </div>

                    <div class="flex space-x-4 h-10">
                        <label for="shizuoka" class="flex items-center">静　岡　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-navy text-base rounded px-2">
                            <option value="0">地域を選択してください</option>
                            <option value="1">浜　松</option>
                            <option value="2">焼　津</option>
                            <option value="3">静　岡</option>
                            <option value="4">富　士</option>
                            <option value="5">伊　豆</option>
                        </select>
                    </div>

                    <div class="flex space-x-4 h-10">
                        <label for="shizuoka" class="flex items-center">三　重　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-navy text-base rounded px-2">
                            <option value="0">地域を選択してください</option>
                            <option value="1">四　日　市</option>
                            <option value="2">伊　賀</option>
                            <option value="3">津</option>
                            <option value="4">松　坂</option>
                            <option value="6">伊　勢</option>
                            <option value="7">熊　野</option>
                        </select>
                    </div>



                    <div class="flex space-x-4 h-10">
                        <label for="shizuoka" class="flex items-center">岐　阜　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-navy text-base rounded px-2">
                            <option value="0">地域を選択してください</option>
                            <option value="1">奥　飛　騨</option>
                            <option value="2">高　山</option>
                            <option value="3">下　呂</option>
                            <option value="4">多　治　見</option>
                            <option value="5">岐　阜</option>
                            <option value="6">岐　阜　羽　鳥</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="text-lg font-semibold">2.マップから家を選択</div>
            <div>
                <img src="/image/map.svg" class="w-1/2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data () {
        return {
            maplocation: { lat:0, lng: 0 },
            options:{
                zoom:10,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
            },
            markerOptions: {
                url: '/image/pin.svg',
            },
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,

            infoOptions: {
                content: '',
                pixelOffset: {
                    width: 200,
                    height: -50,
                }
            },
            markers: [],
            owari: { lat:35.2188529, lng: 137.0171227 },
        }
    },
    methods: {
        getLocation () {
            if (process.client) {
                if (!navigator.geolocation) {
                alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
                return
                }
                const options = {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 0
                }
                navigator.geolocation.getCurrentPosition(this.success, this.error, options)
            }
        },
        success (position) {
            this.maplocation.lat = position.coords.latitude
            this.maplocation.lng = position.coords.longitude
            this.markers =  [
                {
                    position: { lat: 35.7668603, lng: 139.7719506 },
                    infoText: 
                        '<div>'+
                            '<div>'+
                                '<div class="pb-4 flex space-x-4">'+
                                    '<span class="bg-navy-blue text-white text-bold text-xs flex items-center px-2 rounded">新築マンション</span>'+
                                    '<span class="text-lg">レジデンス白潟 A000B/ 2階</span>'+
                                '</div>'+
                                '<div class="flex">'+
                                    '<img src="/image/first-view.jpeg" class="w-1/3 rounded">'+
                                    '<div class="desc pl-2 w-full">'+
                                        '<table class="table-auto">'+
                                            '<tbody>'+
                                                '<tr>'+
                                                    '<td class="border text-xs p-2">賃料/管理費等</td>'+
                                                    '<td class="border text-xs p-2 font-extrabold text-red-700">8.5万</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td class="border text-xs p-2">所在地</td>'+
                                                    '<td class="border text-xs p-2">島根県松江市菅田町332-3</td>'+
                                                '</tr>'+
                                                    '<td class="border text-xs p-2">交通</td>'+
                                                    '<td class="border text-xs p-2">JR山陰本線 松江駅 徒歩10分</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td class="border text-xs p-2">専有面積/間取り</td>'+
                                                    '<td class="border text-xs p-2">18.15m² / 1K</td>'+
                                                '</tr>'+       
                                            '</tbody>'+
                                        '</table>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="mt-4">'+
                                    '<button type="button" class="w-full bg-navy-blue text-white text-extrabold px-2 h-10 rounded">この物件を見る</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
                },
            ]
               
        },
        error (error) {
            switch (error.code) {
                case 1: //PERMISSION_DENIED
                    alert('位置情報の利用が許可されていません')
                break
                case 2: //POSITION_UNAVAILABLE
                    alert('現在位置が取得できませんでした')
                break
                case 3: //TIMEOUT
                    alert('タイムアウトになりました')
                break
                default:
                    alert('現在位置が取得できませんでした')
                break
            }
        },
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoOptions.content = marker.infoText;

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
          }
    },
    mounted() {
        this.getLocation();
    },
}
</script>

<style>
    .gm-style .gm-style-iw-t::after{
        left: -200px
    }
</style>

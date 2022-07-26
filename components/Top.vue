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

                <GmapMarker v-for="(m,id) in marker_items"
                    :position="m.position"
                    :title="m.title"
                    :label="m.label"
                    :icon="m.icon"
                    :clickable="true" 
                    :draggable="false" 
                    :key="id" @click="toggleInfoWindow(m,m.id)"
                >
                </GmapMarker>
            </GmapMap>
        </div>
        <div class="desc px-6">
            <div class="title text-2xl mb-5 flex">
                <img src="/image/home.png" class="rounded-md outline outline-1 w-1/6">
                <span class="flex items-center ml-5">住まいを探す</span>
            </div>
            <div class="pb-5">
                <div class="text-lg font-semibold">1.場所を選択</div>

                <div class="flex flex-col justify-center items-center space-y-3 mt-3">

                    <div class="flex space-x-4 h-10">
                        <label for="shizuoka" class="flex items-center">愛　知　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-solid border-gray-300 rounded px-2"
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
                        class="border border-solid border-gray-300 rounded px-2">
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
                        class="border border-solid border-gray-300 rounded px-2">
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
                        <label for="shizuoka" class="w-1/2 flex items-center">岐　阜　県</label>
                        <select name="shizuoka" id="shizuoka"
                        class="border border-solid border-gray-300 rounded px-2">
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
            <div class="flex justify-center items-center">
                <img src="/image/map.svg" class="w-1/2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['realEstatesData'],
    data () {
        return {
            maplocation: { lat:35.2188529, lng: 137.0171227 },
            marker_items: [],
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
            form: {
                tel: '07089387369'
            }
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
        async getMapData(){
            try {
                const res = await this.$axios.$get('/real-estates/map')
                this.marker_items = res.data
            }
            catch(err){
                console.log('error',err)
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
        this.getMapData();
    },
}
</script>

<style>
    .gm-style .gm-style-iw-t::after{
        left: -200px
    }
</style>

<template>
  <div>
    <div class="w-full px-10">
      <Top :realEstatesData = realEstatesData />
      <div class="body flex space-x-10 mt-10">
        <Sidebar/>
        <div class="house-list w-full">
          <Main :realEstatesData = realEstatesData :baseImageUrl = baseImageUrl />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

export default {
  component:{
    Top,Sidebar,Footer,Main
  },
  data () {
    return {
      realEstatesData: [],
      baseImageUrl : 'https://gna-real-estate.s3.ap-northeast-1.amazonaws.com/realestates/',
    }
  },
  methods: {
    async getRealStateData(){
      try {
        const res = await this.$axios.$get('/real-estates/type/1')
        this.realEstatesData = res.data
        console.log('data',res.data)
      }
      catch(err){
        console.log('error',err)
      }
    }
    // getLocation () {
    //   if (process.client) {
    //     if (!navigator.geolocation) {
    //       alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
    //       return
    //     }
    //     const options = {
    //       enableHighAccuracy: false,
    //       timeout: 5000,
    //       maximumAge: 0
    //     }
    //     navigator.geolocation.getCurrentPosition(this.success, this.error, options)
    //   }
    // },
    // success (position) {
    //   this.latitude = position.coords.latitude
    //   this.longitude = position.coords.longitude
    // },
    // error (error) {
    //   switch (error.code) {
    //     case 1: //PERMISSION_DENIED
    //       alert('位置情報の利用が許可されていません')
    //       break
    //     case 2: //POSITION_UNAVAILABLE
    //       alert('現在位置が取得できませんでした')
    //       break
    //     case 3: //TIMEOUT
    //       alert('タイムアウトになりました')
    //       break
    //     default:
    //       alert('現在位置が取得できませんでした')
    //       break
    //   }
    // }
  },
  mounted() {
    this.getRealStateData();
  },
}
</script>
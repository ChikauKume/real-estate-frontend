<template>
    <div>
        <div class="container">
            <div class="text-xl">登録物件</div>
            <Favorite :realEstatesData = realEstatesData :baseImageUrl = baseImageUrl />
        </div>
    </div>
</template>

<script>
import Favorite from '@/components/Favorite'

export default {
  component:{
    Favorite
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
        const res = await this.$axios.$get('/real-estates/type/' + this.$auth.user.data.id)
        this.realEstatesData = res.data
      }
      catch(err){
        console.log('error',err)
      }
    }
  },
  mounted() {
    this.getRealStateData();
  },
}
</script>

<template>
    <div>
        <Nav/>
        <div>
            <Nuxt/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Nav,
    Footer
  }
}
</script>
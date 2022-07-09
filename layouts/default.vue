<template>
    <div class="flex flex-col min-h-screen">
        <Nav/>
        <div class="container mx-auto px-20">
            <Nuxt/>
        </div>
        <Footer class="flex items-end"/>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '../components/Footer.vue'
export default {
  // middleware: ['admin'],
  components:{
    Nav,
    Footer
  }
}
</script>
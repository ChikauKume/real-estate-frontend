<template>
    <div>
        <Nav/>
        <div class="py-10">
            <Nuxt/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
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

<style>
    .bg-navy-blue{
        background: #04384c;
    }
    .border-navy{
        border-style: solid;
        border-color:#04384c
    }
    hr{
        height: 1px;
        background-color: #04384c;
        border: none;
        color: #04384c;
    }
</style>
<template>
    <div>
        <div>
            <Nuxt/>
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
    .bg-violet{
        background:#a94335;
    }
    .bg-register{
        background:#4ea30a;
    }
    hr{
        height: 1px;
        background-color: #04384c;
        border: none;
        color: #04384c;
    }
</style>
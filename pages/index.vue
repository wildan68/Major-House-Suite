<template>
  <div class="mainapp">
    <div class="wrapper">
      <Header />
      <Home />
      <TypeRumah/>
      <Kontak/>
      <Partnership/>
      <Footer/>
    </div>
  </div>
</template>

<script>
    import Header from "@/layouts/header.vue"
    import Home from "@/layouts/home.vue"
    import TypeRumah from '@/layouts/home/type_rumah.vue'
    import Kontak from '@/layouts/home/kontak.vue'
    import Partnership from '@/layouts/home/partnership.vue'
    import Footer from '@/layouts/footer.vue'

    export default {
        name: "index",
        components: {
            Home,
            Header,
            TypeRumah,
            Kontak,
            Partnership,
            Footer,
        },
        async mounted() {
            if (document.body.offsetWidth >= 768) {
                this.$conf.isMobile = false
            } else {
                this.$conf.isMobile = true
            }
        },
        head() {
          return {
            title: 'Major Home Suite'
          }
        }
    };
</script>
<template>
  <div class="homepage">
    <div class="container">
      <Navbar />
    </div>
    <Banner />
    <Soulful />
    <Clients />
    <Solution />
    <Learn />
    <Donate />
    <FAQ />
    <Events />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Soulful from '@/components/Soulful.vue'
import Clients from '@/components/Clients.vue'
import Solution from '@/components/Solution.vue'
import Learn from '@/components/Learn.vue'
import Donate from '@/components/Donate.vue'
import FAQ from '@/components/FAQ.vue'
import Events from '@/components/Events.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Homepage',
  components: {
    Navbar,
    Banner,
    Soulful,
    Clients,
    Solution,
    Learn,
    Donate,
    FAQ,
    Events,
    Footer
  }
}
</script>

<style scoped>
 
</style>
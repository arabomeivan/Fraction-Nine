<template>
    <div>
        <div v-if="!appMounted" class="position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center z-index-1">
            <NuxtImg class="img-fluid align-self-center" src="splashscreen.png"/>
        </div>
        <div v-if="appMounted">
            <NavBar/>
            <main class="container py-5">
                <slot/>
            </main>
            <AppFooter/>
        </div>
    </div>
    
</template>
<script>

import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
    name:'DefaultLayout',
    components: {
        NavBar,
        AppFooter,
    },
    data()
    {
        return {
            appMounted: false,
        }
    },

    mounted() {
        
        // wait one tick so child page has rendered
    this.$nextTick(() => {
      this.waitForCriticalImages().then(() => {
        this.appMounted = true;
      });
    });
    },
    methods: {
    waitForCriticalImages() {
      const imgs = Array.from(
        // look for ALL images marked as critical, no matter which page
        this.$el.querySelectorAll('.preload-img')
      );

      if (!imgs.length) return Promise.resolve();

      const promises = imgs.map(img =>
        img.complete && img.naturalWidth
          ? Promise.resolve()
          : new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            })
      );

      return Promise.all(promises);
    }
  }
 
}
</script>
<style>
    
</style>
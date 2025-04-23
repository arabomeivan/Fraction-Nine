<template>
    <div>
        <div class="row">
            <div ref="observerTarget" :class="['col-lg-6', isVisible ? 'animate__animated animate__zoomIn' : '']">
                <NuxtLink to="#">
            <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389315/pexels-davidgomes-3114133_1_zqw983.png" class="img-fluid mb-1" alt="">
            <p class="mb-1">Lifestyle/Photography</p>
            <div class="d-flex justify-content-between"><span class="fs-4"><b>STREET BLUES</b></span> <span><BootstrapIcon name="bi bi-arrow-up-right"/></span></div>
                </NuxtLink>
            </div>
            <div ref="observerTarget" :class="['col-lg-6', isVisible ? 'animate__animated animate__zoomIn' : '']">
                <NuxtLink to="#">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389315/pexels-nappy-3097438_1_v4ahwm.png" class="img-fluid mb-1" alt="">
                    <p class="mb-1">Lifestyle/Photography</p>
            <div class="d-flex justify-content-between"><span class="fs-4"><b>STREET BLUES</b></span> <span><BootstrapIcon name="bi bi-arrow-up-right"/></span></div>
                </NuxtLink>
                
            </div>
        </div>

        <div class="row">
            <div ref="observerTarget" :class="['col-lg-6', isVisible ? 'animate__animated animate__zoomIn' : '']">
                <NuxtLink to="#">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389314/pexels-brett-sayles-1996969_1_k94iir.png" class="img-fluid mb-1" alt="">
                    <p class="mb-1">Lifestyle/Photography</p>
            <div class="d-flex justify-content-between"><span class="fs-4"><b>STREET BLUES</b></span> <span><BootstrapIcon name="bi bi-arrow-up-right"/></span></div>
                </NuxtLink>
            </div>
            <div ref="observerTarget" :class="['col-lg-6', isVisible ? 'animate__animated animate__zoomIn' : '']">
                <NuxtLink to="#">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389313/pexels-chuck-3152045_1_hkoavi.png" class="img-fluid mb-1" alt="">
                    <p class="mb-1">Lifestyle/Photography</p>
            <div class="d-flex justify-content-between"><span class="fs-4"><b>STREET BLUES</b></span> <span><BootstrapIcon name="bi bi-arrow-up-right"/></span></div>
                </NuxtLink>
            </div>
        </div>
        
        lifestyle
    </div>
</template>
<script>
export default {
    name:'LifeStyle',
    data() {
    return {
      isVisible: false, // becomes true when in viewport
    };
  },
  mounted() {
    // Setup the intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3, // Adjust visibility threshold
      }
    );

    observer.observe(this.$refs.observerTarget);
  },
}
</script>
<style lang="">
    
</style>
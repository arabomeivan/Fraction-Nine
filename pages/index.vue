<template>
    <div class="py-5">
        <section id="heroo-section" class="py-lg-5 py-3">
            <h1 class="mb-3"><b>Hello, I'M A <br><span style="font-size:79px;">PROFESSIONAL PHOTOGRAPHER</span></b></h1>

            <p>
                I capture life’s most meaningful moments — from intimate weddings to bold fashion shoots. Let’s tell your story through powerful imagery.
            </p>

            <div class="d-flex justify-content-lg-start justify-content-center mt-5">
                <button class=" p-0 bg-transparent border-0">
                   <span class="btn bg-black  rounded-5 text-white">
                    Book a call
                   </span>
                    <span class="btn bg-black rounded-circle text-white">
                      <BootstrapIcon name="bi bi-arrow-up-right"/></span>
                </button>
               
            </div>

            <div class=" d-lg-flex gap-2 justify-content-center">
                <div class="d-flex align-items-end justify-content-center mt-lg-0">
                    <img src="/assets/images/gallery-1.png" class="img-fluid my-3 animate__animated animate__zoomIn" alt="">
                </div>
                <div class="d-flex align-items-end justify-content-center">
                    <img src="/assets/images/gallery-2.png" class="img-fluid mb-3 animate__animated animate__zoomIn" alt="">
                </div>
                
                <div>
                    <img src="/assets/images/gallery-3.png" class="img-fluid mb-3 animate__animated animate__zoomIn" alt="">
                </div>
                
            </div>
        </section>

        <section id="about" class="py-5">
       <h1 class="fs-5 mb-3 text-secondary">About Us</h1>
       <div class="d-lg-flex justify-content-between">
       <div>
        <h1>I CAPTURE JOY, CRAFT MEMORIES, AND TELL STORIES WITH EVERY CLICK</h1>
       </div>

       <div>
        <p>a photographer with a passion for capturing life in all its beautiful forms. Photography, for me, is more than just pictures. It’s about connection — with people, with places, with moments that matter. I aim to create images that not only look good, but feel real — joyful, honest, and full of life.</p>
       </div>
       </div>

       <div ref="slider" class="scroll-wrapper">
        <div class="scroll-track gap-4" :style="{ animationDuration: duration + 's' }">
          <div
            v-for="(image, index) in loopedImages"
            :key="index"
            class="image-container"
            :class="{ active: isCentered(index) }"
          >
          <img 
          :src="image.link"
          class="img-fluid about w-60"
         >
          </div>
        </div>
        
       </div>
        </section>

        <section id="portfolio" class="portfolio">
        <h1 class=" fs-5 mb-3 text-secondary">Portfolio</h1>
        <h1 class="mb-3">
            THROUGH MY LENS, I BRING LIFE, <br>LAUGHTER, AND A TOUCH OF 
            <br>WONDER
        </h1>

        <div class="d-flex gap-2 justify-content-start overflow-x-auto flex-shrink-0 tab-wrapper">
       <button v-for="componentbtn in portfolioComponents " :key="componentbtn.Id" class="btn tab-btn bg-white text-black border border-black rounded-5" @click="currentComponent = componentbtn.component">{{componentbtn.name}}</button>
        </div>

        <div class="py-5">
            <component :is="currentComponent"/>
        </div>
    </section>

    <section id="services" class="py-5">
   <h1 class="fs-5 mb-4 text-secondary">
  OUR SERVICES
   </h1>

   <h1 class="text-black">
    I BLEND EMOTION AND ARTISTRY TO TURN YOUR MOMENTS INTO MAGIC
   </h1>

   <div class="d-block d-lg-flex justify-content-between mt-3">
<div class="">
<Services/>
</div>

<div class="d-flex align-items-center justify-content-center justify-content-lg-end">
    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745491704/pexels-anya-juarez-tenorio-227888521-31651281_1_e7vhqy.png" class="img-fluid" alt="">
</div>
   </div>
    </section>

    <section id="testimonials" class="py-5">
     <h1 class="fs-5 text-secondary">TESTIMONIALS</h1>
     <h1 class="text-black">HEAR FROM OUR HAPPY CLIENTS</h1>

     <div>
        <TestiMonials/>
     </div>

    </section>
</div>
</template>
<script>
import Brands from '~/components/portfolio/Brands.vue';
import LandScapes from '~/components/portfolio/LandScapes.vue'
import LifeStyle from '~/components/portfolio/LifeStyle.vue'
import Portraits from '~/components/portfolio/Portraits.vue'
import Wedding from '~/components/portfolio/Wedding.vue'
import TestiMonials from '~/components/TestiMonials.vue'
import Services from '~/components/Services.vue'
export default {
    name:'HomePage',
    components:{
        TestiMonials, Services
    },
    data(){
        return{

            portfolioComponents:[{
                id:0, name: 'Lifestyle', component: LifeStyle
            },
            {
               id:1, name: 'Wedding', component: Wedding
            },
            {
               id:2, name: 'Portraits', component: Portraits
            },
            {
                id:3, name: 'Landscapes', component: LandScapes
            },
            {
                id:4, name: 'Brands', component: Brands
            }],

            currentComponent: LifeStyle,
            images:[{
                id:0,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358738/full-shot-woman-with-afro-hairstyle_1_ocxu1i.png'
            },
            {
                id:1,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358737/pexels-bobbydimas-30879095_1_1_t6jct6.png'
            },
            {
                id:2,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358738/Frame_11_nlud82.png'
            },
            {
                id:3,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358737/Frame_14_aq1sag.png'
            },
            {
                id:4,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358737/Frame_83_saqw1t.png'
            },
            {
                id:5,
                link:'https://res.cloudinary.com/djtwgg6op/image/upload/v1745358737/Frame_9_bkjkpf.png'
            },
            
        ],
        duration: 30,
            
        }
    },
    computed:
    {
        loopedImages() {
      return [...this.images, ...this.images]; // repeat once, or more
    },
    },
    mounted(){
        // this.currentComponent = this.portfolioComponents[0].component
        const loop = () => {
      this.$forceUpdate(); // re-evaluate which item is centered
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    },
    methods: { 
        isCentered(index) {
      const slider = this.$refs.slider;
      if (!slider) return false;

      const containerRect = slider.getBoundingClientRect();
      const item = slider.querySelectorAll('.image-container')[index];
      if (!item) return false;

      const itemRect = item.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const itemCenter = itemRect.left + itemRect.width / 2;

      const threshold = 50; // distance in px to consider "centered"
      return Math.abs(containerCenter - itemCenter) < threshold;
    },
    },

}

</script>
<style lang="">
    
</style>
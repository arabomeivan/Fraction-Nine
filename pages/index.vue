<template>
    <div class="py-5">
        <section id="heroo-section" class="py-lg-5 py-3">
            <h1 class="mb-3"><b>Hello, I'M A <br><span style="font-size:79px;">A VISUAL STORYTELLER
            </span></b></h1>

            <p>
                I capture life’s most powerful moments  from intimate weddings to bold fashion shoots and cinematic films. <br>Through photography and cinematography, I turn real moments into timeless visuals that speak beyond words.
            </p>

            <div class="d-flex justify-content-lg-start justify-content-center mt-5">

                <b-button
  toggle="modal"
  target="#exampleModalCenteredScrollable"
  class="p-0 bg-transparent border-0"
 >
 <span class="btn bg-black  rounded-5 text-white">
    Get in touch
   </span>
    <span class="btn bg-black rounded-circle text-white">
      <BootstrapIcon name="bi bi-arrow-up-right"/></span>
 </b-button>
               
            </div>

            <div class=" d-lg-flex gap-2 justify-content-center">
                <div class="d-flex align-items-end justify-content-center mt-lg-0">
                    <img src="/assets/images/gallery-1.png" class="img-fluid preload-img my-3 animate__animated animate__zoomIn" alt="">
                </div>
                <div class="d-flex align-items-end justify-content-center">
                    <img src="/assets/images/gallery-2.png" class="img-fluid preload-img mb-3 animate__animated animate__zoomIn" alt="">
                </div>
                
                <div class="d-flex align-items-end justify-content-center">
                    <img src="/assets/images/gallery-3.png" class="img-fluid preload-img mb-3 animate__animated animate__zoomIn" alt="">
                </div>
                
            </div>
        </section>

        <section id="about" class="py-5">
       <h1 class="fs-5 mb-3 text-secondary">About Us</h1>
       <div class="row justify-content-between mb-5">
       <div class="col-lg-6">
        <h1>I CRAFT MEMORIES, FRAME STORIES, AND BRING VISIONS TO LIFE
        </h1>
       </div>

       <div class="col-lg-6">
        <p class="text-justify">I’m a passionate creative dedicated to capturing life in all its beautiful forms — not just through stills, but also through cinematic motion. Photography and filmmaking aren’t just services to me. They’re how I connect with people, places, and the raw moments that truly matter. Whether it’s a smile, a mood, or an entire experience, I aim to preserve it in a way that feels honest, emotional, and unforgettable.</p>
       </div>
       </div>

       <div ref="slider" class="scroll-wrapper">
        <div class="scroll-track gap-4" :style="{ animationDuration: duration + 's' }">
          <div
            v-for="(image, index) in loopedImages"
            :key="index"
            class="image-container"
          >
          <div style="display: inline-block;">
            <img 
              :src="image.link"
              class="img-fluid"
              style="width:400px"
            >
          </div>
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
       <button type="button" v-for="componentbtn in portfolioComponents " :key="componentbtn.Id" class="btn tab-btn bg-white text-black border border-black rounded-5" @click="currentComponent = componentbtn.component">{{componentbtn.name}}</button>
        </div>

        <div class="py-5 portfolio">
            <transition name="fade-zoom">
            <component :is="currentComponent"/>
        </transition>
        </div>
    </section>

    <section id="services" class="py-5">
   <h1 class="fs-5 mb-4 text-secondary">
    What We Offer
   </h1>

   <h1 class="text-black mb-3">
    SERVICES THAT TRANSFORM YOUR VISION INTO VISUAL MASTERPIECES
   </h1>

   <p>From idea to final image or frame, we offer end-to-end visual services tailored to brands, <br>creatives, and individuals who value timeless storytelling. Whether you're seeking stills or cinematic visuals, we’ve got you covered.
</p>

   <div class="row mt-3">
<div class="col-lg-6 pt-5">
<ServicesSection/>
</div>

<div class="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745491704/pexels-anya-juarez-tenorio-227888521-31651281_1_e7vhqy.png" class="img-fluid preload-img" alt="">
</div>
   </div>
    </section>

    <section id="testimonials" class="py-5">
     <h1 class="fs-5 text-secondary">TESTIMONIALS</h1>
     <h1 class="text-black">HEAR FROM OUR HAPPY <br>CLIENTS</h1>

     <div>
       <TestiMonials/>
     </div>

    </section>
</div>
</template>
<script>
// import Brands from '~/components/portfolio/Brands.vue';
import LandScapes from '~/components/portfolio/LandScapes.vue'
import LifeStyle from '~/components/portfolio/LifeStyle.vue'
import Portraits from '~/components/portfolio/Portraits.vue'
import Wedding from '~/components/portfolio/Wedding.vue'
import TestiMonials from '../components/TestiMonials.vue'
import ServicesSection from '../components/ServicesSection.vue'
export default {
    name:'HomePage',
    components:{
        TestiMonials, ServicesSection
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
            ],

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
<style scoped>
.portfolio {
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out; /* Smooth transition for both transform and opacity */
  }
  
  .fade-zoom-enter-active,
  .fade-zoom-leave-active {
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
  }
  
  .fade-zoom-enter, .fade-zoom-leave-to /* .fade-zoom-leave-active in <2.1.8 */ {
    transform: scale(0.8); /* Zoom out initially */
    opacity: 0; /* Fade out initially */
  }
</style>
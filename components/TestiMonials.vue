<template>
    <div class="py-5">
        <Carousel
        ref="carousel"
  :autoplay="false"
  :interval="5000"
        >
            <CarouselInner>
             <CarouselItem>
                <div class="d-flex justify-content-between">
                    <div class="w-50 px-2">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745572112/Frame_39_1_iazqsc.png" class="img-fluid" alt="">
                    </div>
    
                    <div class="content w-50">
                    <p class="mb-5">
                        Marshall’s creativity is unmatched. His direction during the shoot made everything effortless, and the final images looked like they belonged in Vogue
                    </p>
                    <div class="mb-5 d-flex align-items-center gap-2">
                        <hr class="d-inline-block flex-grow-1 my-0">
                        <div class="text-black">Ivan Arabome</div>
                      </div>
    
                    <div class="d-flex gap-2 justify-content-end">
                   <button type="button" class="rounded-circle align-items-center justify-content-cente number-badge btn text-black border border-black bg-transparent " @click="handlePrev">
                   <BootstrapIcon name="bi bi-arrow-left"/>
                   </button>
                   <button type="button" class=" d-flex align-items-center justify-content-center rounded-circle number-badge btn text-black border border-black bg-transparent" @click="handleNext">
                    <BootstrapIcon name="bi bi-arrow-right"/>
                   </button>
                    </div>
    
                    </div>
    
                  </div>
             </CarouselItem>
             <CarouselItem>
                <div class="d-flex justify-content-between">
                    <div class="w-50 px-2">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389307/Frame_39_1_dyrl4w.png" class="img-fluid" alt="">
                    </div>
    
                    <div class="content w-50">
                    <p class="mb-5">
                        I’ve never seen a crew move this fast without sacrificing quality. They storyboarded on Monday and we had a color‑graded master by Friday.”
                    </p>
                    <div class="mb-5 d-flex align-items-center gap-2">
                        <hr class="d-inline-block flex-grow-1 my-0">
                        <div class="text-black">Helen</div>
                      </div>
    
                    <div class="d-flex gap-2 justify-content-end">
                   <button type="button" class="rounded-circle align-items-center justify-content-cente number-badge btn text-black border border-black bg-transparent " @click="handlePrev">
                   <BootstrapIcon name="bi bi-arrow-left"/>
                   </button>
                   <button type="button" class=" d-flex align-items-center justify-content-center rounded-circle number-badge btn text-black border border-black bg-transparent" @click="handleNext">
                    <BootstrapIcon name="bi bi-arrow-right"/>
                   </button>
                    </div>
    
                    </div>
    
                  </div>
             </CarouselItem>
             <CarouselItem>
                <div class="d-flex justify-content-between">
                    <div class="w-50 px-2">
                    <img src="https://res.cloudinary.com/djtwgg6op/image/upload/v1745389497/Frame_40_stcmvj.png" class="img-fluid" alt="">
                    </div>
    
                    <div class="content w-50">
                    <p class="mb-5">
                        Our documentary short looks and sounds like something I’d stream on Netflix. Clients keep asking who produced it.
                    </p>
                    <div class="mb-5 d-flex align-items-center gap-2">
                        <hr class="d-inline-block flex-grow-1 my-0">
                        <div class="text-black">Adam Levine</div>
                      </div>
    
                    <div class="d-flex gap-2 justify-content-end">
                   <button type="button" class="rounded-circle align-items-center justify-content-cente number-badge btn text-black border border-black bg-transparent " @click="handlePrev">
                   <BootstrapIcon name="bi bi-arrow-left"/>
                   </button>
                   <button type="button" class=" d-flex align-items-center justify-content-center rounded-circle number-badge btn text-black border border-black bg-transparent" @click="handleNext">
                    <BootstrapIcon name="bi bi-arrow-right"/>
                   </button>
                    </div>
    
                    </div>
    
                  </div>
             </CarouselItem>
            </CarouselInner>
           </Carousel>
    </div>
</template>
<script>
export default {
    name:'TestiMonials',
    methods: {
    handleNext() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        carousel.autoplay = false;
        carousel.next();
      }
    },
    handlePrev() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        carousel.autoplay = false;
        carousel.prev();
      }
    },
  },
}
</script>
<style lang="">
    
</style>
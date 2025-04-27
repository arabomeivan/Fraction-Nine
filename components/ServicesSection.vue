<template>
    <div>
      <div id="accordionExample" class="accordion">
        <div
          v-for="(services, index) in servicesWithSlug"
          :key="services.slug"
          class="accordion-item border-0 mb-4">
    
          <h2 class="accordion-header">
            <button
            class="accordion-button border-bottom border-light text-black gap-3 d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#${services.slug}`"
            :aria-expanded="openItem === services.slug"
            :aria-controls="services.slug"
            @click="toggleItem(services.slug)">
    
            
              <span
                class="d-flex align-items-center fs-2 justify-content-center p-3 bg-black text-white rounded-circle mr-2"
                style="width: 58px; height:58px">
                0{{ services.id }}
              </span>


    
              <div class=" w-100 justify-content-between d-flex align-items-center">
              
                  <p class="fs-4 text-black mb-0">
                    <b>{{ services.title }}</b>
                  </p>
                
                
              
                <span class="ms-auto">
                  <BootstrapIcon class="fs-4" :name="openItem === services.slug ? 'bi bi-arrow-down' : 'bi bi-arrow-right'"/>
                </span>
              </div>
               
            </button>
          </h2>
    
          <div
            :id="services.slug"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>{{ services.content }}</p>
            </div>
          </div>
    
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'ServicesSection',
    data(){
      return{
        openItem: null,
        servicesContent:[{
          id:1, content:'For when every frame deserves to feel intentional. We specialize in lifestyle, portraits, weddings, editorial, and branded shoots. With a focus on authenticity and mood, we turn fleeting moments into frame-worthy memories.', title:'PHOTOGRAPHY'

        },
        {
          id:2, content:'Visual storytelling that feels like cinema.From short films to brand stories, music videos, and event reels — we craft cinematic experiences that stir emotion and command attention.', title:'CINEMATOGRAPHY'

        },
        {
          id:3, content:'Where raw footage becomes a compelling narrative. We shape your clips into complete visual experiences — polished cuts, motion graphics, sound design, colour grading, and pacing that brings your story to life.', title:'PHOTO EDITING'

        },
        {
          id:4, content:'Perfecting every pixel. Your raw images deserve finishing touches that elevate them. We handle colour grading, retouching, skin cleanup, lighting balance, and artistic enhancement.', title:'VIDEO EDITING'

        },
        {
          id:4, content:'Dynamic, sharp, and purpose-driven video content. Ideal for events, social content, or business storytelling — we deliver clean, engaging footage that reflects your story and your audience.', title:'VIDEOGRAPHY'

        }
      ]
      }
    },
    computed: {
    /** add a safe, unique slug for each item */
    servicesWithSlug() {
      const slugify = str =>
        str
          .toLowerCase()
          .replace(/\s+/g, '-')          // spaces → dashes
          .replace(/[^a-z0-9-_]/g, '');  // remove invalid chars

      return this.servicesContent.map(s => ({
        ...s,
        slug: `collapse-${slugify(s.title)}`
      }));
    }
  },
  methods: {
  toggleItem(slug) {
    this.openItem = this.openItem === slug ? null : slug;
  }
}
}
</script>
<style lang="">
    
</style>
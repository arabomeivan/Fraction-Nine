<template>
    <div>
      <div id="accordionExample" class="accordion">
        <div
          v-for="(services, index) in servicesWithSlug"
          :key="services.slug"
          class="accordion-item border-0 mb-4">
    
          <h2 class="accordion-header">
            <button
              class="accordion-button border-bottom border-light text-black gap-2 d-flex"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#${services.slug}`"
              :aria-controls="services.slug"
              :aria-expanded="false">
    
              <span
                class="d-flex align-items-center fs-3 justify-content-center p-3 bg-black text-white rounded-circle"
                style="width: 58px; height:58px">
                0{{ services.id }}
              </span>
    
              <!-- keep your h1 tag if you really want it (HTML spec warns) -->
              <h1 fs="fs-4">
                {{ services.title }}
              </h1>
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
        servicesContent:[{
          id:1, content:'We plan, shoot, and polish images that tell your brand’s story—whether it’s lifestyle, product, or event coverage.', title:'PHOTOGRAPHY'

        },
        {
          id:2, content:'From storyboard to final export, we craft narrative‑driven video: promos, interviews, social loops, and docu‑shorts.', title:'VIDEOGRAPHY'

        },
        {
          id:3, content:'From gentle retouch to surreal composites, we refine images so they publish‑ready—print or digital.', title:'PHOTO EDITING'

        },
        {
          id:4, content:'We turn hours of clips into a cohesive narrative: pacing, color, graphics, and delivery across every platform.', title:'VIDEO EDITING'

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
  }
}
</script>
<style lang="">
    
</style>
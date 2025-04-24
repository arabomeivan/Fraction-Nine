<template>
    <div class="py-5 bg-black text-white">
        <div class="py-5 container">
              <div class="row">
             <div class="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                <div class="">
                    <h1 class="text-white fs-5 mb-3">
                        Contact Us
                                     </h1>
                        
                                     <div>
                                        <h1 class="text-white">LET'S DISCUSS YOUR</h1>
                                     </div>
                                     <div class="d-flex gap-3">
                                        <h1 class="text-white">VISION</h1>
                                        <div class="d-flex justify-content-lg-start" style="width:max-content">
                                            <button class=" p-0 bg-transparent border-0">
                                               <span class="btn bg-black border border-white  rounded-5 text-white">
                                               Get in touch
                                               </span>
                                                <span class="btn bg-black border border-white rounded-circle text-white">
                                                  <BootstrapIcon name="bi bi-arrow-up-right"/></span>
                                            </button>
                                           
                                        </div>
                                     </div>
                </div>
             
             </div>
             <div class="col-lg-6 d-block d-lg-flex align-items-center gap-5 justify-content-lg-end">
             <div>
              <h1 class="fs-5 text-white mb-2">Quick Links</h1>

              <ul class="list-unstyled">
                <li v-for="footerLinks in quickLinks" :key="footerLinks.id">
                    <NuxtLink :to="footerLinks.link" class="text-white text-decoration-none">
                     {{footerLinks.text}}   
                    </NuxtLink>
                </li>
            </ul>
             </div>

             <div>
                <h1 class="fs-5 text-white mb-2">Portfolio</h1>
                <ul class="list-unstyled">
                    <li v-for="footerLinks in portfolioLinks" :key="footerLinks.id">
                        <NuxtLink :to="footerLinks.link" class="text-white text-decoration-none">
                         {{footerLinks.text}}  
                        </NuxtLink>
                    </li>
                </ul>
               </div>

               <div>
                <h1 class="fs-5 text-white mb-2">Services</h1>
                <ul class="list-unstyled">
                    <li v-for="footerLinks in serviceLinks" :key="footerLinks.id">
                        <NuxtLink :to="footerLinks.link" class="text-white text-decoration-none">
                         {{footerLinks.text}}   
                        </NuxtLink>
                    </li>
                </ul>
               </div>
             
             </div>

              </div>


              <hr class="text-secondary my-3">

              <div class="d-flex gap-5 justify-content-center">
           <a href="#" class="text-white"><BootstrapIcon name="bi bi-tiktok"/></a>
           <a href="#" class="text-white"><BootstrapIcon name="bi bi bi-instagram"/></a>
           <a href="#" class="text-white"><BootstrapIcon name="bi bi-linkedin"/></a>
           <a href="#" class="text-white"><BootstrapIcon name="bi bi-twitter-x"/></a>
              </div>

        </div>
        
    </div>
</template>
<script>
export default {
    name:'AppFooter',
    data(){
        return{
            quickLinks:[
                {id:0, text:'About', link:'/#about'},
                {id:1, text:'Portfolio', link:'/#portfolio'},
                {id:2, text:'Services', link:'/#serivices'},
                {id:3, text:'Testimonials', link:'/#testimonials'}
            ],
            portfolioLinks:[
                {id:0, text:'Lifestyle', link:'/#lifestyle'},
                {id:1, text:'Portraits', link:'/#portraits'},
                {id:2, text:'Weddings', link:'/#weddings'},
                {id:3, text:'Landscapes', link:'/#landscapes'}
            ],
            serviceLinks:[
                {id:0, text:'Photography', link:'/#about'},
                {id:1, text:'Videography', link:'/#portfolio'},
                {id:2, text:'Photo editing', link:'/#photoediting'},
                {id:3, text:'Video editing', link:'/#videoediting'}
            ]
        }
    }
}
</script>
<style lang="">
    
</style>
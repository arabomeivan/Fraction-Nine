<template>
    <div class="py-5 bg-black text-white">
        <div class="py-5 container">
              <div class="row">
             <div class="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                <div class="justify-content-center justify-content-lg-start">
                    <h1 class="text-white fs-5 mb-3">
                        Contact Us
                                     </h1>
                        
                                     <div>
                                        <h1 class="text-white">LET'S DISCUSS YOUR <span class="d-lg-none d-block">VISION</span></h1>
                                     </div>
                                     <div class="d-flex justify-content-center justify-content-lg-start gap-3">
                                        <h1 class="text-white d-lg-block d-none">VISION</h1>
                                        <div class="d-flex justify-content-lg-start" style="width:max-content">
                                            <b-button
  toggle="modal"
  target="#exampleModalCenteredScrollable"
  class="btn p-0 bg-transparent border-0"
 >
 <span class="btn bg-black border border-white  rounded-5 text-white">
    Get in touch
    </span>
     <span class="btn bg-black border border-white rounded-circle text-white">
       <BootstrapIcon name="bi bi-arrow-up-right"/></span>
 </b-button>

                                           
                                        </div>
                                     </div>
                </div>
             
             </div>
             <div id="links" class="col-lg-6 d-block d-lg-flex align-items-center justify-content-between">
             <div class="ml-5">
              <h1 class="fs-5 text-white mb-2 text-center">Quick Links</h1>

              <ul class="list-unstyled">
                <li v-for="footerLinks in quickLinks" :key="footerLinks.id">
                    <NuxtLink :to="footerLinks.link" class="text-white text-decoration-none">
                     {{footerLinks.text}}   
                    </NuxtLink>
                </li>
            </ul>
             </div>

             <div class="ml-5">
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

   <!-- Contact Us -->
   <Modal id="exampleModalCenteredScrollable">
    <ModalDialog
     centered
     scrollable
    >
     <ModalContent>
      <ModalHeader>
       <ModalTitle>Contact Us</ModalTitle>
       <CloseButton dismiss="modal" />
      </ModalHeader>
      <ModalBody>
            <form class="text-justify w-100 align-self-center" @submit.prevent="contactUs">
                <div>
                    <div class="mb-4" style="text-align:justify;">
                        <label for="exampleFormControlInput1" class="form-label text-secondary">First Name<span class="text-danger">*</span></label>
                        <input id="exampleFormControlInput1" v-model="fName" type="text" class="form-control" placeholder="First Name">
                      </div>
                      <div class="mb-4" style="text-align:justify;">
                        <label for="exampleFormControlInput1" class="form-label text-secondary">Last Name<span class="text-danger">*</span></label>
                        <input id="exampleFormControlInput1" v-model="lName" type="text" class="form-control" placeholder="Last Name">
                      </div>
                      <div class="mb-4" style="text-align:justify;">
                        <label for="exampleFormControlInput1" class="form-label text-secondary">Email<span class="text-danger">*</span></label>
                        <input id="exampleFormControlInput1" v-model="email" type="email" class="form-control" placeholder="Email">
                      </div>
                      <div class="mb-4" style="text-align:justify;">
                        <label for="exampleFormControlTextarea1" class="form-label">Message <span class="text-danger">*</span></label>
                        <textarea id="exampleFormControlTextarea1" v-model="message" class="form-control" rows="3"/>
                      </div>
                
                      <div class="d-flex justify-content-center">
                        <button class="btn border-0 bg-black text-white w-100" type="submit">Send Message</button>
                      </div>
                </div>
                </form>
        
      </ModalBody>
     </ModalContent>
    </ModalDialog>
   </Modal>
   

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
            ],
            fName: '',
            lName:'',
            email: '',
            message: ''
        }
    },

    

    methods: {
        async contactUs()
        {
            try{
                const response = await fetch("https://formspree.io/f/xgvwjwge", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.subject,
        }),
      });

      if (response.ok) {
        alert("Received! will reach out to you");
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        alert("There was an error submitting the form.");
      }
            }
            catch(error){
                console.error(error);
            }
        }
    }
}
</script>
<style lang="">
    
</style>
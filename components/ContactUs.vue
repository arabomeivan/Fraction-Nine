<template>
    <div>
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
    </div>
</template>
<script>
export default {
    name:'ContactUs',
    data(){
        return{
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
                const response = await fetch("https://formspree.io/f/mgvkvrbo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${this.fName} ${this.lName}`,
          email: this.email,
          message: this.message,
          subject: this.subject,
        }),
      });

      if(this.fName == " "||this.lName == " " || this.email == " " || this.message == " " || this.subject == " "){
        alert("Please fill the required fields with red dots ");
      }

      else if (response.ok) {
        alert("Received! will reach out to you");
        this.name = "";
        this.email = "";
        this.message = "";
      } else{
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
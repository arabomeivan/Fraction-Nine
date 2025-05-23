<template>
    <div class="py-5">
        <div class="d-flex gap-2 align-items-center mb-5">
            <div>
                <NuxtLink :to="previousRoute">
                    <button type="button" class="bg-transparent border border-black rounded-1 p-2">
                   <BootstrapIcon name="bi bi-caret-left-fill"/>
                    </button>
                </NuxtLink>
            </div>
            

            <div>
                <h1>
                    BOOK A SESSION
                </h1>
            </div>
            
        </div>

        <div class="d-block d-lg-flex gap-4">
            <div class=" w-50 bg-light p-5 rounded-2">
                <h1 class="mb-4">BOOKING DETAILS</h1>

                <p class="fs-7 test-secondary">Tell us about your vision, and we'll handle the rest. Fill out the <br>form below to get started</p>

                <form @submit.prevent="">
                    <div class="mb-3">
                        <label for="name" class="form-label text-secondary">Name</label>
                        <input id="name" v-model="name" type="text" class="form-control">
                      </div>
                      <div class="mb-3">
                        <label for="email" class="form-label text-secondary">Email Address</label>
                        <input id="email" v-model="email" type="email" class="form-control">
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="form-label text-secondary">Phone Number</label>
                        <input id="phone" type="text" class="form-control">
                      </div>
                      
                      <div class="mb-3">
                        <label for="servicetype" class="form-label text-secondary">Service Type</label>
                        <select id="servicetype" v-model="selectedServiceType" class="form-control text-secondary">
                            <option disabled value="">Please select a service</option>
                            <option value="general">Lifestyle</option>
                            <option value="dental">Portraits</option>
                            <option value="eye">Wedding</option>
                            <option value="pediatrics">Landscapes</option>
                          </select>
                      </div>

                      <div class="d-flex justify-content-between mb-3">
                        <div>
                            <label for="date" class="form-label text-secondary">Date</label>
                            <input id="date" v-model="date" type="date" class="form-control">
                          </div>

                          <div>
                            <label for="time" class="form-label text-secondary">Time</label>
                            <input id="time" v-model="time" type="datetime" class="form-control">
                          </div>
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label text-secondary">Description</label>
                        <textarea id="description" v-model="description" class="form-control" rows="3"/>
                      </div>
                      
                </form>

            </div>

            <div class="w-50 bg-light p-5 rounded-2">
                <h1 class="mb-4">BOOKING SUMMARY</h1>

                <form @submit.prevent="">
                    <p class="mb-1 fs-7">Name</p>
                    <p class="text-secondary fs-7 mb-2">{{name}}</p>
                    <p class="mb-1 fs-7">Email</p>
                    <p class="text-secondary fs-7 mb-2">{{email}}</p>
                    <p class="mb-1 fs-7">Phone Number</p>
                    <p class="text-secondary fs-7 mb-2">{{phone}}</p>
                    <p class="mb-1 fs-7">Service Type</p>
                    <p class="text-secondary fs-7 mb-2">{{serviceType}}</p>
                    <div class="d-flex justify-content-between mb-2 w-50">
                        <div>
                            <p class="mb-1 fs-7">Date</p>
                            <p class="text-secondary fs-7">{{date}}</p>
                        </div>

                        <div>
                            <p class="mb-1 fs-7">Time</p>
                        <p class="text-secondary fs-7">{{time}}</p>
                        </div>
                        
                    </div>

                    <p class="mb-1 fs-7">Description</p>
                        <p class="text-secondary fs-7 mb-2">{{description}}</p>


                        <p class="text-secondary fs-7 mb-5">
                            Tell us about your vision, and we’ll handle the rest. Fill out the form below to get started.
                        </p>

                        <div>
                            <button type="submit" class="btn no-hover submit-btn w-100 rounded-5">Submit</button>
                        </div>
                            
                        
                    
                </form>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BookSession',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // `vm` is the component instance
      vm.previousRoute = from.fullPath
    })
  },

    data() {
    return {
      previousRoute: '',
      name:'',
      email:'',
      phone:'',
      selectedServiceType:'',
      date:'',
      time:'',
      description:''
    }
  },
  

}
</script>
<style lang="">
    
</style>
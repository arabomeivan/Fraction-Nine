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

                <Form :validation-schema="schema" @submit.prevent="onSubmit">
                    <div class="mb-3">
                      <label for="name" class="form-label text-secondary"><b>Name</b></label>
                      <Field id="name" name="name" as="input" class="form-control" />
                      <ErrorMessage name="name" class="text-danger" />
                    </div>
                
                    <div class="mb-3">
                      <label for="email" class="form-label text-secondary"><b>Email Address</b></label>
                      <Field id="email" name="email" type="email" as="input" class="form-control" />
                      <ErrorMessage name="email" class="text-danger" />
                    </div>
                
                    <div class="mb-3">
                      <label for="phone" class="form-label text-secondary"> <b>Phone Number</b> </label>
                      <Field id="phone" name="phone" as="input" class="form-control" />
                      <ErrorMessage name="phone" class="text-danger" />
                    </div>
                
                    <div class="mb-3">
                      <label for="servicetype" class="form-label text-secondary"><b>Service Type</b></label>
                      <Field id="servicetype" name="selectedServiceType" as="select" class="form-control text-secondary">
                        <option disabled value="">Please select a service</option>
                        <option value="general">Lifestyle</option>
                        <option value="dental">Portraits</option>
                        <option value="eye">Wedding</option>
                        <option value="pediatrics">Landscapes</option>
                      </Field>
                      <ErrorMessage name="selectedServiceType" class="text-danger" />
                    </div>
                
                    <div class="d-flex justify-content-between mb-3">
                      <div>
                        <label for="date" class="form-label text-secondary"><b>Date</b></label>
                        <span>
                            <Field id="date" name="date" type="date" as="input" class="form-control" />
                            <BootstrapIcon class="text-secondary" name="bi bi-calendar"/>
                        </span>
                        <ErrorMessage name="date" class="text-danger" />
                      </div>
                
                      <div>
                        <label for="time" class="form-label text-secondary"><b>Time</b></label>
                        <span>
                            <Field id="time" name="time" type="time" as="input" class="form-control" /> <BootstrapIcon class="text-secondary" name="bi bi-clock"/>
                        </span>
                        <ErrorMessage name="time" class="text-danger" />
                      </div>
                    </div>
                
                    <div class="mb-3">
                      <label for="description" class="form-label text-secondary">Description</label>
                      <Field id="description" name="description" as="textarea" class="form-control" rows="3" />
                      <ErrorMessage name="description" class="text-danger" />
                    </div>
                
                    <div class="form-check mb-3">
                      <Field name="terms" type="checkbox" as="input" class="form-check-input" />
                      <b-button
                      toggle="modal"
                      target="#termsconditions"
                      class="p-0 bg-transparent border-0"
                     >
                        I accept the terms and conditions
                       
                         
                     </b-button>
                      <ErrorMessage name="terms" class="text-danger" />
                    </div>
                   
                  </Form>

            </div>

            <div class="w-50 bg-light p-5 rounded-2">
                <h1 class="mb-4">BOOKING SUMMARY</h1>

                <div>
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
                            
                        
                    
                </div>
                
            </div>
        </div>

        <TermsConditions/>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import TermsConditions from '../components/TermsConditions.vue'
import * as yup from 'yup'
export default {
    name:'BookSession',
    components: {
    Form,
    Field,
    ErrorMessage,
    TermsConditions
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // `vm` is the component instance
      vm.previousRoute = from.fullPath
    })
  },

  data() {
    return {
      schema: yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        phone: yup.string().required('Phone number is required'),
        selectedServiceType: yup.string().required('Please select a service'),
        date: yup.string().required('Date is required'),
        time: yup.string().required('Time is required'),
        description: yup.string().required('Description is required'),
        terms: yup.bool().oneOf([true], 'You must accept the terms'),
      }),
    }
  
  },
  methods: {
    onSubmit(values) {
      console.log('Form submitted with:', values)
      // You now have all form values like:
      // values.name, values.email, values.phone, etc.
    },
  },

}
</script>
<style lang="">
    
</style>
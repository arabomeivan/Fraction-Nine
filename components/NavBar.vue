<template>
    <div>
        <nav :class="pageScrolledY ? 'navbar navbar-expand-lg bg-light fixed-top py-4':'navbar navbar-expand-lg bg-white fixed-top py-4'">
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
              </button>
              <div id="navbarTogglerDemo01" class="collapse navbar-collapse text-center">
                <NuxtLink to="/" class="navbar-brand"><img src="/logo.png" class="img-fluid" alt=""></NuxtLink>
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NuxtLink to="#portfolio" class="nav-link">Portfolio</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="#about" class="nav-link">About</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="#services" class="nav-link">Service</NuxtLink>
                  </li>
                </ul>
                <div class="d-flex justify-content-center">
                  <NuxtLink to="/booksession" class="btn bg-transparent border-0 text-black p-0">
                    <span class="btn bg-transparent rounded-5 border-black border">
                      Book a Session
                    </span>
                    <span class="btn border-black border rounded-circle text-black">
                      <BootstrapIcon name="bi bi-arrow-up-right"/>
                    </span>
                  </NuxtLink>
                </div>
                
              </div>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
  name:'NavBar',
  data()
  {
    return{
      pageScrolledVertically: false
    }
  },

  computed:
  {
    pageScrolledY()
       {
        return this.pageScrolledVertically
       }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
    methods:{
      handleScroll() {
        if (window.scrollY > 0) {
          this.pageScrolledVertically = true
        } else {
          this.pageScrolledVertically = false
        }
      }
    }
    
}
</script>
<style>
    
</style>
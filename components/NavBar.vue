<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-white fixed-top py-4">
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
                    <NuxtLink to="#service" class="nav-link">Service</NuxtLink>
                  </li>
                </ul>
                <div class="d-flex justify-content-center">
                    <button class=" btn bg-white border-0 text-black">
                       <span class="btn bg-white  rounded-5 border-black border">
                        Book a call
                       </span>
                        <span class="btn border-black border rounded-circle text-black">
                          <BootstrapIcon name="bi bi-arrow-up-right"/></span>
                    </button>
                   
                </div>
                
              </div>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
  name:'NavBar',
    
}
</script>
<style>
    
</style>
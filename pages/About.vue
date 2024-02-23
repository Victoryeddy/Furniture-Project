<template>
  <div>
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 relative min-h-full">
        <div class="col-span-2">
          <img src="../assets/about-us.jpg" alt="" width="1000" />
        </div>
        <div class="ms-0 lg:ms-3 mt-10 px-3 lg:px-0">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col mt-9">
              <h1 class="text-5xl font-extrabold ms-10">About Us</h1>
              <p class="ms-10 mt-7 font-medium text-xl capitalize">
                we believe that furniture is more than just functional pieces;
                it's an expression of your personality, style, and values.
                
              </p>
            </div>
          </div>
          <div
            class="bg-yellow-700 p-4 w-5/12 right-0 bottom-0 absolute hidden lg:block"
          >
            <p class="flex justify-center text-white hover-me">
              <span class="mt-1 me-2 font-bold text-xl"
                >Explore Now</span
              >
              <img src="../assets/svg/move-right.svg" class="" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <Testimonials/>
  </div>
</template>

<script setup></script>

<style></style>

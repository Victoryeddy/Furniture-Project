<template>
  <div>
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 relative min-h-full">
        <div class="col-span-2" data-aos="fade-right">
          <img src="../assets/about-us.jpg" alt="" width="1000" />
        </div>
        <div class="ms-0 lg:ms-3 mt-10 px-3 lg:px-0" data-aos="fade-left">
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
            data-aos="fade-up"
          >
            <p class="flex justify-center text-white hover-me">
              <span class="mt-1 me-2 font-bold text-xl">Explore Now</span>
              <img src="../assets/svg/move-right.svg" class="" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="py-[5rem]">
        <div class="container mx-auto px-3">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div data-aos="fade-right">
              <div class="">
                <h2 class="text-5xl font-extrabold">
                  Our <span class="text-[#F5CA56]">Achievement</span>
                </h2>

                <h2 class="text-4xl font-bold mt-6">Memorable Story</h2>
                <p class="text-xl mt-4">
                  Our journey began with a simple idea: to provide high-quality,
                  stylish furniture that doesn't break the bank. We understand
                  that furnishing your home is an investment, both financially
                  and emotionally, which is why we're committed to offering
                  affordable options without compromising on quality or design.
                </p>
                <p class="text-xl mt-4">
                  But our mission goes beyond just selling furniture. We're here
                  to inspire and empower you to create spaces that reflect your
                  unique taste and lifestyle. Whether you're furnishing your
                  first apartment, redesigning your home office, or simply
                  looking for that perfect accent piece, we're here to help you
                  every step of the way. Thank you for joining us on this
                  journey. Together, let's transform houses into homes and turn
                  living spaces into expressions of artistry and individuality.
                </p>
                <p class="mt-5">
                  <img src="../assets/svg/move-right (1).svg" />
                </p>
              </div>
              <Ratings />
            </div>
            <div class="flex justify-center" data-aos="fade-left">
              <img src="../assets/SPS_1374-removebg-preview.png" class="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Testimonials />
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped>
/* * {
  outline: 1px solid red;
} */
</style>

<template>
  <div>
     <section>
      <div class="py-[5rem]">
        <div class="container mx-auto px-3">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-stretch"
          >
            <div class="flex flex-col self-center">
              <div class="justify-self-start">
                <h2 class="text-5xl font-extrabold">
                  We Are <span class="text-[#F5CA56]">Loaft</span><br />
                  What our Priority <br />
                  <span class="text-[#F5CA56]">Client's Says</span>
                </h2>
                <p class="text-xl mt-6">
                  If you are looking at blank cassettes on the web, you may be
                  very <br />confused at the difference in price.
                </p>

                <div class="mt-7">
                  <carousel :items-to-show="1" wrapAround :autoplay="3000">
                    <slide v-for="slide in allData.items" :key="slide.id">
                      <p class="carousel__item text-2xl text-start">
                        {{ slide.name }}
                      </p>
                      <div class="carousel__item flex my-5">
                        <div>
                          <img src="../assets/testi-author.png" />
                        </div>
                        <div class="ms-3">
                          <p class="font-extrabold text-start">Victory Ndu</p>
                          <p class="text-gray-500 text-start">
                            Managing Director
                          </p>
                        </div>
                      </div>
                    </slide>

                    <template #addons>
                      <!-- <navigation>
                        <template #next>
                          <div class="carousel__next">
                            <img src="../assets/svg/move-right.svg" class="carousel__icon" />
                          </div>
                        </template>
                        <template #prev>
                          <div class="carousel__prev relative top-[-5rem]">
                            <img src="../assets/svg/move-right.svg"  class="carousel__icon"/>
                          </div>
                        </template>
                      </navigation>  -->
                      <!-- <pagination />  -->
                    </template>
                  </carousel>
                </div>
              </div>
            </div>

            <div>
              <img src="../assets/testi-img.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const allData = reactive({
  items: [
    {
      id: 1,
      name: "I couldn't be happier with my recent purchase from this furniture website! The quality of the craftsmanship exceeded my expectations, and the customer service was exceptional. My new sofa has become the centerpiece of my living room, and I constantly receive compliments on its style and comfort.",
    },
    {
      id: 2,
      name: "Shopping for furniture online can be daunting, but this website made the process so easy and enjoyable. From browsing their wide selection to receiving my order ahead of schedule, every step was seamless. ",
    },
    {
      id: 3,
      name: "I've been searching for the perfect bedroom set for months, and I finally found it on this website! The variety of styles and finishes made it easy to find something that matched my taste and budget.",
    },
    {
      id: 4,
      name: "As an interior designer, I'm always on the lookout for unique pieces to elevate my clients' spaces, and this website has become my go-to resource. The curated collection of furniture and decor makes it easy to find pieces that fit any design aesthetic, from modern and minimalist to classic and traditional.",
    },
  ],
})

</script>



<style>

</style>

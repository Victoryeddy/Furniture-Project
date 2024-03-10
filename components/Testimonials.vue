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
                    <slide v-for="slide in testimonials" :key="slide.id">
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
const testimonials = ref("")

async function getTestimonials() {
  try {
    const data = await $fetch(`/api/userFeedbacks`)
    testimonials.value = data.response
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getTestimonials()
})
</script>

<style></style>

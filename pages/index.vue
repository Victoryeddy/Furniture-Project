<template>
  <div>
    <div class="fixed right-10 top-10 z-40">
      <img src="../assets/svg/align-right.svg" class="cursor-pointer" />
    </div>
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 relative min-h-full">
        <div>
          <img src="../assets/loaft-header.jpg" alt="" width="900" />
        </div>
        <div class="ms-10 mt-10">
          <div class="flex flex-col justify-between">
            <img src="../assets/logo.png" alt="" width="60" class="pt-5" />
            <div class="flex flex-col mt-12">
              <h1 class="text-5xl font-extrabold ms-10">
                Precise Concept design
                <br />for Posh living
              </h1>
              <p class="ms-10 mt-8 font-medium text-xl">
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each. You may be saying to yourself,
              </p>
            </div>
          </div>
          <div class="bg-yellow-700 p-9 w-7/12 right-0 bottom-0 absolute">
            <p class="flex justify-center text-white hover-me">
              <span class="mt-1 me-2 font-bold text-xl"
                >Learn More About Precise Design</span
              >
              <img src="../assets/svg/move-right.svg" class="" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="py-[10rem]">
        <div class="container mx-auto">
          <div class="grid grid-cols-2 gap-4 justify-items-stretch">
            <div class="flex flex-col">
              <div class="justify-self-start">
                <h2 class="text-5xl font-extrabold">
                  We Are <span class="text-[#F5CA56]">Loaft</span> Here Are Some
                  Of Our <span class="text-[#F5CA56]">Latest Works</span>
                </h2>
                <p class="text-xl mt-6">
                  If you are looking at blank cassettes on the web, you may be
                  very <br/>confused at the difference in price.
                </p>
                <p class="mt-5">
                  <img src="../assets/svg/move-right (1).svg" />
                </p>
              </div>

              <div class="justify-self-end mt-10">
                <div class="relative">
                  <img src="../assets/furnitureImg1.jpg" class="rounded" />
                  <div class="p-3 bg-white absolute z-40 bottom-0 w-6/12 rounded">
                    <p class="text-[#F5CA56] text-xl">SMART KITCHEN SETUP</p>
                    <p class="font-bold text-xl mt-4">
                      Smart Kitchen Setup with <br /> Vintage Style
                    </p>
                    <p class="mt-8 text-xl">
                      <button type="submit" class="flex items-center hover-me">
                        <span class="me-3">View Details</span>
                       <img src="../assets/svg/move-right-yellow.svg" />
                      </button>
                    </p>
                  </div>
                </div>

                <div class="flex justify-between w-9/12 my-9">
                  <img
                    src="../assets/sponsor1.png"
                    class="sponsor-logos cursor-pointer"
                  />
                  <img
                    src="../assets/sponsor2.png"
                    class="sponsor-logos cursor-pointer"
                  />
                  <img
                    src="../assets/sponsor3.png"
                    class="sponsor-logos cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div>
               <div class="">
                <div class="relative">
                  <img src="../assets/furnitureImg2.jpg" class="rounded" />
                  <div class="p-3 bg-white absolute z-40 bottom-0 w-6/12 rounded">
                    <p class="text-[#F5CA56] text-xl">SMART KITCHEN SETUP</p>
                    <p class="font-bold text-xl mt-4">
                      Smart Kitchen Setup with <br /> Vintage Style
                    </p>
                    <p class="mt-8 text-xl">
                      <button type="submit" class="flex items-center hover-me">
                        <span class="me-3">View Details</span>
                       <img src="../assets/svg/move-right-yellow.svg" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
               <div class="mt-5">
                <div class="relative">
                  <img src="../assets/furnitureImg3.jpg" class="rounded" />
                  <div class="p-3 bg-white absolute z-40 bottom-0 w-6/12 rounded">
                    <p class="text-[#F5CA56] text-xl">SMART KITCHEN SETUP</p>
                    <p class="font-bold text-xl mt-4">
                      Smart Kitchen Setup with <br /> Vintage Style
                    </p>
                    <p class="mt-8 text-xl">
                      <button type="submit" class="flex items-center hover-me">
                        <span class="me-3">View Details</span>
                       <img src="../assets/svg/move-right-yellow.svg" />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
<style>
* {
  font-family: "Lato", sans-serif;
  /* outline: 1px solid red; */
}
.hover-me > span,
.hover-me > img {
  transition: all 0.5s ease-in-out;
}
.hover-me:hover > span {
  transform: translateX(-7px);
}
.hover-me:hover > img {
  transform: translateX(5px);
}

.sponsor-logos {
  filter: grayscale(100%);
  transition: all 0.3s ease 0s;
}

.sponsor-logos:hover {
  filter: grayscale(0);
}
</style>

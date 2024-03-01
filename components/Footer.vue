<template>
<footer class="bg-black">
      <div class="pt-[4rem] pb-[3rem]">
        <div class="container mx-auto px-3">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-stretch"
          >
            <div>
              <h3 class="text-white text-3xl font-extrabold">About Loaft</h3>
              <p class="text-gray-300 mt-4">
                Our commitment to customer satisfaction extends beyond the sale.
                With our dedicated team of furniture experts, we're here to
                assist you every step of the way, from browsing our extensive
                inventory to delivery and beyond.
              </p>
              <p class="text-gray-300 mt-6">
                Copyright&copy;{{ date }}. Made by
                <span class="text-yellow-600 font-extrabold">Victory Ndu</span>
              </p>
            </div>
            <div>
              <h3 class="text-white text-3xl font-extrabold">Newsletter</h3>
              <p class="text-gray-300 mt-4">
                Stay Updated with our latest trend
              </p>
              <form class="relative mt-2">
                <input
                  class="required:border-red-500 p-3 w-[95%] focus:outline-none border-none"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
                <button
                  class="bg-yellow-700 hover:bg-yellow-800 py-3 px-3 mt-2 absolute right-0 bottom-0"
                >
                  <img src="../assets/svg/caret-right.svg" />
                </button>
              </form>
            </div>
            <div class="flex flex-col items-start">
              <h3 class="text-white text-3xl font-extrabold">Follow Me</h3>
              <p class="text-gray-300 mt-4">Let us be social</p>
              <div class="mt-4 flex">
                <img src="../assets/svg/facebook.svg" class="me-2"/>
                <img src="../assets/svg/twitter.svg"  class="mx-2"/>
                <img src="../assets/svg/dribble.svg"  class="mx-2"/>
                <img src="../assets/svg/linkendIn.svg"  class="mx-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
<script setup>

const date = ref("")

date.value = new Date().getFullYear()
</script>
<style scoped>
</style>
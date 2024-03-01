<template>
  <div>
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 relative min-h-full">
        <div class="col-span-2">
          <img src="../assets/about-us.jpg" alt="" width="1000" />
        </div>
        <div class="ms-0 lg:ms-3 mt-9 px-3 lg:px-0">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col mt-9">
              <h1 class="text-5xl font-extrabold ms-10">Contact Us</h1>
              <p class="ms-10 mt-5 font-medium text-xl capitalize">
                Got a question, need assistance, or just want to say hello?
                We're all ears! Reach out to our friendly team for any inquiries
                or support regarding our furniture collections.
              </p>
            </div>
          </div>
          <!-- <div
            class="bg-yellow-700 p-4 w-5/12 mt-7 right-0 bottom-0 absolute hidden lg:block cursor-pointer"
          >
            <p class="flex justify-center text-white hover-me">
              <span class="mt-1 me-2 font-bold text-xl">Contact Us</span>
              <img src="../assets/svg/move-right.svg" class="" />
            </p>
          </div> -->
        </div>
      </div>
    </section>

    <section>
      <div class="py-[5rem]">
        <div class="container mx-auto px-3">
          <div class="grid grid-cols-1 gap-5">
            <GoogleMap
              :api-key="apiKey"
              :center="{ lat: 37.7749, lng: 122.4194 }"
              :zoom="12"
              style="width: 100%; height: 400px"
            >
              <!-- <Marker :options="markerOptions" /> -->
            </GoogleMap>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div >
              <ul class="list-none">
                <li class="flex align-start">
                  <img
                    src="../assets/svg/home.svg"
                    class="me-2 mb-5"
                    width="30"
                    height="30"
                  />

                  <div>
                    <p class="text-2xl font-normal">V-Loaft Shop</p>
                    <p class="font-light mt-2">Ontario,Canada</p>
                  </div>
                </li>
                <li class="flex align-start mt-4">
                  <img
                    src="../assets/svg/phone.svg"
                    class="me-2 mb-5"
                    width="30"
                    height="30"
                  />

                  <div>
                    <p class="text-2xl font-normal">Phone Number</p>
                    <p class="font-light mt-2">0546904348923</p>
                  </div>
                </li>
                <li class="flex align-start mt-4">
                  <img
                    src="../assets/svg/mail.svg"
                    class="me-2 mb-5"
                    width="30"
                    height="30"
                  />

                  <div>
                    <p class="text-2xl font-normal">Email</p>
                    <p class="font-light mt-2">vic@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-span-2">
              <form action="#">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  <div class="col-span-2">

                    <div class="mb-3">
                      <input
                        type="text"
                        placeholder="Enter your fullname"
                        class="p-3 outline-2 focus:outline-yellow-800 w-full rounded border-yellow-800 border-2"
                        required
                      />
                    </div>
                    <div class="mb-3 mt-3">
                      <input
                        type="email"
                        placeholder="e.g vic@gmail.com"
                        class="p-3 outline-2 focus:outline-yellow-800 w-full border-yellow-800 border-2"
                        required
                      />
                    </div>
                    <div class="mb-3 mt-3">
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                        class="p-3 outline-2 focus:outline-yellow-800 w-full border-yellow-800 border-2"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-span-2">
                    <textarea class="p-3 outline-2 focus:outline-yellow-800 w-full rounded border-yellow-800 border-2 h-full" placeholder="Enter Message"/>

                    <p class="text-end mt-4"><button class="px-6 py-4 rounded bg-yellow-800 text-white font-bold">Send Message</button></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
// import { GoogleMap, Marker } from "vue3-google-map"
const apiKey = ref(process.env.GOOGLE_MAPS_API_KEY)

// console.log(apiKey.value)
const markerOptions = ref({
  // position: center,
  label: "L",
  title: "LADY LIBERTY",
})
</script>

<style scoped>
/* * {
  outline: 1px solid #333;
} */
</style>

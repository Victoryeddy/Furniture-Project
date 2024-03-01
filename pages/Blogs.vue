<template>
  <div>
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 relative min-h-full">
        <div class="col-span-2">
          <img src="../assets/blog.jpg" alt="" />
        </div>
        <div class="ms-0 lg:ms-10 mt-10 px-3 lg:px-0">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col mt-[2rem]">
              <h1 class="text-5xl font-extrabold ms-10">Blogs</h1>
              <p class="ms-10 mt-8 font-medium text-xl">
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each. You may be saying to yourself,
              </p>
            </div>
          </div>
          <button class="bg-red-500 text-white" @click.prevent="getBlogs">Click me</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const nuxtApp = useNuxtApp()

const apiKey = config.public.newsApiKey
async function getBlogs() {
  // const { $fetch1 } = nuxtApp
  try {
    const response = await nuxtApp.$fetch1(
      `top-headlines?category=general&lang=en&country=us&max=4&apikey=${apiKey}`
    )
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

// onMounted(() =>{
//   getBlogs();
// })
</script>

<style scoped>
* {
  outline: 1px solid green;
}
</style>

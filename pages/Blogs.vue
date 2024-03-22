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
                We understand the importance of furniture that not only looks
                good but also serves a purpose in your daily life. That's why
                each piece has been thoughtfully designed to enhance your
                comfort and convenience.
              </p>
            </div>
          </div>
          <!-- <button class="bg-red-500 text-white" @click.prevent="getBlogs">
            Click me
          </button> -->
        </div>
      </div>
    </section>

    <section>
      <div class="py-[5rem]">
        <div class="container mx-auto px-3">
          <div class="flex justify-center" v-if="!blogs">
            
            <img src="../assets/1485.gif" alt="" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5" v-else>
            <div v-for="blog in blogs" :key="blog.source.name" class="flex items-stretch relative">
              <div class="card my-4 p-2 ">
                <div class="">
                  <img :src="blog.image" class="self-stretch"/>
                </div>
                <div class="p-3 mt-3 pb-6">
                  <h2 class="font-black text-2xl">{{ blog.title }}</h2>
                  <p class="font-light text-xl mt-2">{{ blog.description }}</p>
                </div>
                <div class="relative pb-3">
                  <a :href="blog.url" class="bg-[#f9f9ffb4] hover:bg-yellow-700 p-3 rounded">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const nuxtApp = useNuxtApp()

const blogs = ref(null)

// const { fetch1 } = nuxtApp
const apiKey = config.public.newsApiKey
async function getBlogs() {
  const { $fetch1 } = nuxtApp
  try {
    const response = await $fetch1(
      `top-headlines?category=general&lang=en&country=us&max=20&apikey=${apiKey}`
    )
    blogs.value = response.articles
    
  } catch (e) {
    console.log(e)
  }
}

onMounted(() =>{
  getBlogs();
})
</script>

<style scoped>
/* * {
  outline: 1px solid green;
}  */
</style>

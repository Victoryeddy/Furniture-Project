<template>
  <div class="right-0 bg-[#f9f9ff] p-5 z-30 top-0 fixed h-full nav">
    <ul class="mt-[8rem] p-5 text-center">
      <li class="my-4">
        <NuxtLink
          :to="{ name: 'index' }"
          class="font-extrabold hover:border-b-2 border-[#A1621F]"
          >Home</NuxtLink
        >
      </li>
      <li class="my-4">
        <NuxtLink
          to="/about"
          class="font-extrabold hover:border-b-2 border-[#A1621F]"
          >About</NuxtLink
        >
      </li>
      <!-- <li class="my-4"><NuxtLink to="#" class="font-extrabold hover:border-b-2 border-[#A1621F]">Work</NuxtLink></li> -->
      <li class="my-4">
        <NuxtLink
          to="/blogs"
          class="font-extrabold hover:border-b-2 border-[#A1621F]"
          >Blogs</NuxtLink
        >
      </li>
      <li class="my-4">
        <NuxtLink
          to="/contact"
          class="font-extrabold hover:border-b-2 border-[#A1621F]"
          >Contact</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>
<style>
.nav {
  width: 40%;
}

@media only screen and (max-width: 40rem) {
  .nav {
    width: 55%;
  }
}
</style>

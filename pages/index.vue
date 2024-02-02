<template>
  <div>
    <div class="fixed right-10 top-10">
      <img src="../assets/svg/align-right.svg" class="cursor-pointer"/>
    </div>
    <div class="flex gap-4 relative">
      <div>
        <img src="../assets/loaft-header.jpg" alt="" width="900" />
      </div>
      <div class="ms-10 mt-10 ">
        <div class="pb-6">
          <img src="../assets/logo.png" alt="" width="60" class="pt-5" />
          <div class="flex flex-col justify-center min-h-96">
            <h1 class="text-5xl mt-5 font-extrabold ms-10">
              Precise 
              Concept design
              <br/>for Posh living
            </h1>
            <p class="ms-10 pt-5 font-medium text-xl">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. <br/>You may see some for as low
              as $.17 each. You may be saying to yourself,
            </p>
          </div>
        </div>
        <div class="bg-yellow-700 p-5 w-7/12 right-0 bottom-0 absolute ">
          <p class="flex justify-center text-white hover-me">
            
            <span class="mt-1 me-2 font-bold text-xl">Learn More About Precise Design</span>
            <img src="../assets/svg/move-right.svg" class=""/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
* {
  font-family: "Lato", sans-serif;
  /* outline: 1px solid red; */
}
.hover-me >span , .hover-me >img{
  transition:all 0.5s ease-in-out;
}
.hover-me:hover > span{
  transform:translateX(-7px);
}
.hover-me:hover > img{
  transform:translateX(5px);
}
</style>

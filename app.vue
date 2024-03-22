<template>
  <div>
    <Aside class="asideBar" />
    <div class="toggle__icon border-red-600" @click.prevent="toggleSidebar">
      <span></span>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
function toggleSidebar() {
  //  const aside = document.querySelector('.asideBar');
  //  aside.classList.toggle('active');
  document.querySelectorAll("body *").forEach(function (element) {
    element.classList.toggle("active")
  })

  console.log(1222)
}
</script>
<style>
body,
html {
  overflow-x: hidden !important;
}
.toggle__icon {
  cursor: pointer;
  position: fixed;
  height: 20px;
  width: 30px;
  top: 25px;
  right: 50px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: transparent;
  padding: 20px;
  z-index: 9999;
}

.asideBar {
  transition: all 0.5s ease-in;
  transform: translate(100%);
}

.asideBar.active {
  transform: translate(0);
}

.toggle__icon span {
  height: 2px;
  width: 20px;
  display: block;
  background: #222222;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 50%;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.toggle__icon span::before {
  content: "";
  height: 2px;
  width: 30px;
  display: block;
  background: #222222;
  right: 0px;
  top: -10px;
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.toggle__icon span.active::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.toggle__icon span::after {
  content: "";
  height: 2px;
  width: 25px;
  display: block;
  background: #222222;
  right: 0px;
  bottom: -10px;
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.toggle__icon span.active:after {
  width: 30px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  bottom: 0px;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.toggle__icon span.active {
  background: transparent !important;
}
</style>

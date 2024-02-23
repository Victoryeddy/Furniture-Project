<template>
  <div>
    <div class="mt-5 grid grid-cols-3">
      <div class="card p-3 m-2 flex justify-center items-center flex-col">
        <img
          src="../assets/svg/briefcase.svg"
          class="icons-gallery"
          width="60"
        />

        <p class="font-black text-3xl text-center mt-4">
          {{ projectDoneStart }}
        </p>
        <p class="text-gray-500 font-bold">Projects Done</p>
      </div>
      <div class="card p-3 m-2 flex justify-center items-center flex-col">
        <img src="../assets/svg/crown.svg" class="icons-gallery" width="60" />
        <p class="font-black text-3xl text-center mt-4">
          {{ membersStart }}
        </p>
        <p class="text-gray-500 font-bold">Expert Members</p>
      </div>
      <div class="card p-3 m-2 flex justify-center items-center flex-col">
        <img src="../assets/svg/trophy.svg" class="icons-gallery" width="60" />
        <p class="font-black text-3xl text-center mt-4">
          {{ achievementStart }}
        </p>
        <p class="text-gray-500 font-bold">Achievements</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const projectDoneStart = ref(0)
const projectDoneEnd = ref(500)

const membersStart = ref(0)
const membersEnd = ref(150)

const achievementStart = ref(0)
const achievementEnd = ref(225)

function counter() {
  const projectIntervalId = setInterval(() => {
    if (projectDoneStart.value < projectDoneEnd.value) {
      projectDoneStart.value++
      // console.log(projectDoneStart.value)
    } else {
      clearInterval(projectIntervalId)
    }
  }, 1)
  const memberIntervalId = setInterval(() => {
    if (membersStart.value < membersEnd.value) {
      membersStart.value++
    } else {
      clearInterval(memberIntervalId)
    }
  }, 1)
  const achievementIntervalId = setInterval(() => {
    if (achievementStart.value < achievementEnd.value) {
      achievementStart.value++
    } else {
      clearInterval(achievementIntervalId)
    }
  }, 1)
}

onMounted(() => {
  counter()
})
</script>

<style></style>

<template>
  <NuxtLayout>
    <div class="">
      <h1>Dang</h1>
            <p>
              <strong>{{ error.message }}</strong>
            </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>

      <button @click="handleError" class="bg-red-500 p-4 ">Go back</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
console.log(error);
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

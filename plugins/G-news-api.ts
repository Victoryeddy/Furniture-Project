export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = 'https://gnews.io/api/v4/'

    nuxtApp.provide('fetch1', async (url, options = {}) => {
        const fullUrl = `${baseURL}${url}`;
        const response = await $fetch(fullUrl, options);
        // console.log(response)
        return response;
    });

   
})
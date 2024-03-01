export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = 'https://gnews.io/api/v4/'

    nuxtApp.provide('fetch1', async (url, options = {}) => {
        const fullUrl = `${baseURL}${url}`;
        const response = await fetch(fullUrl, options);
        return response.json();
    });

    // nuxtApp.provide('$fetch1', async (url, options = {}) => {
    //     const fullUrl = `${baseURL1}${url}`;
    //     const response = await fetch(fullUrl, options);
    //     return response.json();
    // });
})
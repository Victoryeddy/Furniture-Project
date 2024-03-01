function getArticles() {
  apiClient
    .get(
      `top-headlines?category=general&lang=en&country=us&max=4&apikey=${process.env.VUE_APP_NEWS_API_KEY}`
    )
    .then((response) => {
      allArticles.value = response.data.articles
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error)
    })
}

const getFilteredData = async (category) => {
  try {
    const response = await apiClient.get(
      `top-headlines?category=${category}&lang=en&country=us&max=4&apikey=${process.env.VUE_APP_NEWS_API_KEY}`
    )
    const data = await response.data.articles
    allArticles.value = data
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
export const createNewsSlice = ( set, get ) => ({
    newsList: [],
    newsListTotal: [],
    artJson: {
        "id": -1,
        "title": "",
        "content": []
    },
    fetchNewsList: async (language, currentPage, pageSize) => {

        const { newsListTotal } = get()
        // console.log('nlt', newsListTotal);
        
        if(newsListTotal.length <= 0) {
            const response = await fetch(`/cohp2022/data/news/${language}/index.json`)
            const data = await response.json()
            set({ newsListTotal: data })

            const dataSlice = data.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({newsList: dataSlice})

        } else {
            const dataSlice = newsListTotal.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({newsList: dataSlice})

        }

    },
    getNewsListTotal: () => {
        const { newsListTotal } = get()
        return  newsListTotal.length
    },
    fetchArticle: async ( language, id ) => {
        const response = await fetch(`/cohp2022/data/news/${language}/${id}.json`)
        const data = await response.json()
        console.log('art', data);
        set({ artJson: data })
        
    }
})
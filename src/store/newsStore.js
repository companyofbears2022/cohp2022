export const createNewsSlice = ( set, get ) => ({
    newsList: {
        lan: 'en',
        data: []
    },
    newsListTotal: {
        lan: 'en',
        data: []
    },
    artJson: {
        "id": -1,
        "title": "",
        "content": []
    },
    newsCurrentPage: 1,
    setNewsCurrentPage: (page) => {
        set({ newsCurrentPage : page})
    },
    fetchNewsList: async (language, currentPage, pageSize) => {

        const { newsListTotal } = get()
        // console.log('nlt', newsListTotal);
        
        if(newsListTotal.data.length <= 0 || language !== newsListTotal.data.lan) {
            const response = await fetch(`/cohp2022/data/news/${language}/index.json`)
            const data = await response.json()
            set({ newsListTotal: {lan: language, data} })

            const dataSlice = data.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({newsList: {lan: language, data: dataSlice}})

        } else {
            const dataSlice = newsListTotal.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({newsList: {lan: language, data: dataSlice}})

        }

    },
    getNewsListTotal: () => {
        const { newsListTotal } = get()
        return  newsListTotal.data.length
    },
    fetchArticle: async ( language, id ) => {
        const response = await fetch(`/cohp2022/data/news/${language}/${id}.json`)
        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status}`);
        }
        const data = await response.json()
        console.log('art', data);
        set({ artJson: data })
        
    }
})
export const createTutosSlice = ( set, get ) => ({
    tutosList: {
        lan: 'en',
        data: []
    },
    tutosListTotal: {
        lan: 'en',
        data: []
    },
    tutoJson: {
        "id": -1,
        "title": "",
        "content": []
    },
    tutoCurrentPage: 1,
    setTutoCurrentPage: (page) => {
        set({tutoCurrentPage: page})
    },
    fetchTutosList: async (language, currentPage, pageSize) => {

        const { tutosListTotal } = get()
        // console.log('nlt', newsListTotal);
        
        if(tutosListTotal.data.length <= 0 || language !== tutosListTotal.data.lan) {
            const response = await fetch(`/cohp2022/data/tutos/${language}/index.json`)
            const data = await response.json()
            set({ tutosListTotal: {lan: language, data} })

            const dataSlice = data.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({tutosList: {lan: language, data: dataSlice}})

        } else {
            const dataSlice = tutosListTotal.filter((item, index) => ((index >= (currentPage - 1) * pageSize) && (index < currentPage * pageSize)))
            set({tutosList: {lan: language, data: dataSlice}})

        }

    },
    getTutosListTotal: () => {
        const { tutosListTotal } = get()
        return  tutosListTotal.data.length
    },
    fetchTutorial: async ( language, id ) => {
        const response = await fetch(`/cohp2022/data/tutos/${language}/${id}.json`)
        if (!response.ok) {
            throw new Error(`Failed to fetch tutorial: ${response.status}`);
        }
        const data = await response.json()
        set({ tutoJson: data })
        
    }
})
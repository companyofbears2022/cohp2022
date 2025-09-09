export const createDocumentsSlice = ( set, get ) => ({
    rawData: [],
    docIndex: [],
    unitIndex: {
        lan: 'en',
        units: []
    },
    getDocumentsData: async (language) => {
        // const { rawData } = get()
        // console.log('nlt', newsListTotal);
        
        // if(rawData.length <= 0) {
            const response = await fetch(`/cohp2022/data/doc/${language}/index.json`)
            const data = await response.json()
            set({ rawData: data })


        // }
    },
    getUnitIndex: async (language) => {
        const { rawData, unitIndex } = get()

        if(language === unitIndex.lan && unitIndex.units.length > 0) {
            console.log('already loaded');
            return
        }

        let data = rawData
        if(data.length === 0) {
            const response = await fetch(`/cohp2022/data/doc/${language}/index.json`)
            data = await response.json()
            set({ rawData: data })
        }

        const unitTmp = []
        for(let i = 0; i < data.length; i++) {
            const country = data[i]
            for(let j = 0; j < country.categeries.length; j++) {
                const categery = data[i].categeries[j]
                for(let k = 0; k < categery.units.length; k++) {
                    const unit = data[i].categeries[j].units[k]
                    const obj = {
                        id: unit.id ? unit.id : 0,
                        mt: unit.mt ? unit.mt : 0,
                        coun: unit.coun ? unit.coun : 0,
                        type: unit.type ? unit.type : 0,
                        name: unit.name ? unit.name : '',
                        desc: unit.desc ? unit.desc : '',
                    }
                    unitTmp.push(obj)
                }

            }
        }
        set({ unitIndex: {lan: language, units: unitTmp} })


    }
})
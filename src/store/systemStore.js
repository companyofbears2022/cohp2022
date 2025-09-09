export const createSystemSlice = ( set, get ) => ({
    language: 'en',
    theme: 'default',
    setLanguage: (lan) => set((state) => ({ language: lan })),
    getLanguage: () => {
        const { language } = get()
        return language
    }

})
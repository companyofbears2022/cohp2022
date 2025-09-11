import { create } from 'zustand'
import { createNewsSlice } from './newsStore'
import { createTutosSlice } from './tutosStore'
import { createSystemSlice } from './systemStore';
import { createDocumentsSlice } from './documentsStore'

const useStore = create((set, get) => ({
    ...createNewsSlice(set, get),
    ...createSystemSlice(set, get),
    ...createDocumentsSlice(set, get),
    ...createTutosSlice(set, get)
}))

export default useStore;
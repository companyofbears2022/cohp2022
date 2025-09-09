import { create } from 'zustand'
import { createNewsSlice } from './newsStore'
import { createSystemSlice } from './systemStore';
import { createDocumentsSlice } from './documentsStore'

const useStore = create((set, get) => ({
    ...createNewsSlice(set, get),
    ...createSystemSlice(set, get),
    ...createDocumentsSlice(set, get)
}))

export default useStore;
import { create } from 'zustand';

export const useStore = create((set) => ({
    isShow: false,
    toggleShow: () => set(state => ({isShow: !state.isShow}))
}))
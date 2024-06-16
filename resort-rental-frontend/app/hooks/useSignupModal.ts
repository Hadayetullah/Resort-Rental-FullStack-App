import { create } from "zustand";

interface useSignupModalStore {
    isOpen: boolean;
    open: ()=> void;
    close: ()=> void;
}

const useSignupModal = create<useSignupModalStore>((set) => ({
    isOpen: false,
    open: ()=> set({isOpen: true}),
    close: ()=> set({isOpen: false}),
}))

export default useSignupModal;
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  isProfileOpen: boolean;
  openModal: () => void;
  openProfileModal: () => void;
  closeModal: () => void;
  closeProfileModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  isProfileOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  openProfileModal: () => set({ isProfileOpen: true }),
  closeProfileModal: () => set({ isProfileOpen: false }),
}));

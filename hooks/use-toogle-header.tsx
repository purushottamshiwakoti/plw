import { create } from "zustand";

interface HeaderMenuState {
  isMenuShown: boolean;
  toggleMenu: (value: boolean) => void; // Accepts a boolean parameter
}

const useHeaderMenuStore = create<HeaderMenuState>((set) => ({
  isMenuShown: true,
  toggleMenu: (value) => set(() => ({ isMenuShown: value })),
}));

export default useHeaderMenuStore;

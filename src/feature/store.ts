import { create } from "zustand";

type Store = {
  isLogedIn: boolean;
  isLoginPopUpOpen: boolean;
  setLoginPopUp: (payload: boolean) => void;
  setLogin: (payload: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  isLogedIn: false,
  isLoginPopUpOpen: false,
  setLogin: (payload) => set(() => ({ isLogedIn: payload })),
  setLoginPopUp: (payload) => set(() => ({ isLoginPopUpOpen: payload })),
}));

export default useStore;

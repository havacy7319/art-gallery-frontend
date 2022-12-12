import { defineStore } from "pinia";
import {login, updateProfile} from "@/services/user.service";
export const useUserStore = defineStore({
  id: "user",
  state: () =>
    ({
      user: null,
    }),
  getters: {
    userLogged: (state) => (state.user ? state.user : { email: "" }),
    isUserLogged: (state) => state.user !== null,
    userEmail: (state) => (state.user ? state.user.email : ""),
    userName: (state) => (state.user ? state.user.name : ""),
  },
  actions: {
    async doLogin(dataLogin) {
      this.user = await login(dataLogin);
    
    },
    doLogout() {
      this.user = null;
    },
    async doUpdate(profileData){
      await updateProfile(this.user._id,profileData )
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
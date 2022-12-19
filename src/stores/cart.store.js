import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () =>
    ({
      items:[],
    }),
  getters: {
    purchasedItems: (state) => state.items,
  
  },
  actions: {
    purchaseItem(item) {
      this.items.push(item)
    },
    pay(){
      this.items=[]
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "cart",
        storage: localStorage,
      },
    ],
  },
});
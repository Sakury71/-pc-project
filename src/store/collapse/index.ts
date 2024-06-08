import { defineStore } from "pinia";
//定义store
export const collapseStore = defineStore("collapseStore", {
  state: () => {
    return {
      collapse: false,
    };
  },
  actions: {
    setCollapse(collapse: boolean) {
      this.collapse = collapse;
    },
  },
  getters: {
    getCollapse(state) {
      return state.collapse;
    },
  },
});

//创建仓库
import { defineStore } from "pinia";
export const testStore = defineStore("test", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    //获取值
    getCount(state) {
      return state.count;
    },
  },
  actions: {
    //修改值
    setCount(count: number) {
      this.count = count;
    },
  },
});

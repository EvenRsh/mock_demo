import {getData} from '@/config/fetch.js'

const unit = {
  state: {
    name: "unit",
    list:[],
  },
  mutations: {
    setList:(state,data)=>{
      state.list = [].concat(data);
    }
  },
  actions: {
    setList:({commit},data)=>{
      commit("setList",data)
    }
  }
}
export default unit

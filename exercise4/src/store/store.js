import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    people: [],
  },
  mutations: {
    savePeople(state, people) {
      state.people = people;
    },
  },
  actions: {},
  getters: {
    getPeople: (state) => {
      return state.people;
    },
  },
});

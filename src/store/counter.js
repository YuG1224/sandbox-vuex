const state = {
  count: 0
};

const getters = {
  count: state => {
    return state.count;
  }
};

const actions = {
  increment({ commit }) {
    commit("increment");
  },
  decrement({ commit }) {
    commit("decrement");
  }
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

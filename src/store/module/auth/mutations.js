export default {
    setUser(state, payload) {
        state.user = payload.user;
    },
    setToken(state, payload) {
        state.token = payload.token;
    }
};

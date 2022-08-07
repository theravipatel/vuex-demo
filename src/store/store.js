import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        user_name: 'There'
    },
    mutations: {
        LOGIN(state, payload) {
            state.isLoggedIn = true;
            state.user_name = payload.user_name;
        },
        LOGOUT(state) {
            state.isLoggedIn = false;
            state.user_name = 'There';
        }
    }
});
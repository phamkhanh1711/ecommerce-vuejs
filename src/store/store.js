import {createStore} from "vuex";
import auth from "@/store/module/auth";

const store = createStore({
    modules: {
        auth,
    },
})

export default store;

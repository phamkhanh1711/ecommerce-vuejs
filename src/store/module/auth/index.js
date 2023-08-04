import actions from "@/store/module/auth/actions";
import getters from "@/store/module/auth/getters";
import mutations from "@/store/module/auth/mutations";

export default {
    namespaced: true,
    state() {
        return {
            user: {},
            token: null,
        }
    },
    mutations,
    getters,
    actions,
}

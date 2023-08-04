import router from '@/router';
import store from '@/store';

router.beforeEach((to, from, next) => {
    const {userInfor} = store.getters;
});

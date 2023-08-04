import axios from "axios";

export default {
    async login(context, payload) {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/auth/login',
            {
                email: payload.email,
                password: payload.password,
            }
        );
        if (response.status !== 200) {
            throw new Error(
                responseData.message || 'Failed to authenticate. Check your login data.'
            );
        }
        const responseData = await response.data.data;
        context.commit('setToken', {
            token: responseData['access_token'],
        });
        document.cookie = "token=" + responseData['access_token'];
        document.cookie = "refresh_token=" + responseData['refresh_token'];
        const userLogin = await axios.get('http://127.0.0.1:8000/api/auth/me', {
            headers: {
                Authorization: 'Bearer ' + responseData['access_token'],
            }
        });
        if (userLogin.status !== 200) {
            throw new Error(
                responseData.message || 'Failed to authenticate. Check your login data.'
            );
        }
        const userLoginData = await userLogin.data.data;
        context.commit('setUser', {
            user: userLoginData,
        });
    },

    logout(context) {
        context.commit('setUser', {
            user: {},
        });
        context.commit('setToken', {
            token: null,
        });
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },

    async checkAuth(context) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const userLogin = await axios.get('http://127.0.0.1:8000/api/auth/me', {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });
        if (userLogin.status !== 200) {
            throw new Error(
                userLogin.message || 'Failed to authenticate. Check your login data.'
            );
            return false;
        }
        const userLoginData = userLogin.data.data;
        context.commit('setUser', {
            user: userLoginData,
        });
        return true;
    },


};



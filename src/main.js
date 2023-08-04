import './styles/common.scss'
import {createApp} from 'vue'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "@/routes/routes";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NonLayout from "@/layouts/NonLayout.vue";
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import store from "@/store/store";
import App from "@/App.vue";

library.add(faUserSecret)

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

app.use(vuetify)
app.use(router)
app.use(store)
app.use(Toast);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('default-layout', DefaultLayout)
app.component('non-layout', NonLayout)
app.mount('#app')

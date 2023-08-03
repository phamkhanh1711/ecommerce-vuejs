import './styles/common.scss'
import {createApp} from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "@/routes/routes";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NonLayout from "@/layouts/NonLayout.vue";
import { aliases, mdi } from 'vuetify/iconsets/mdi'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
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
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('default-layout', DefaultLayout)
app.component('non-layout', NonLayout)

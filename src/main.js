import {createApp} from 'vue'
import '../node_modules/nprogress/nprogress.css'
import './style.css'
import ToastPlugin from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-bootstrap.css';

import App from './App.vue'
import router from "./router";
import store from "@/store";


const app = createApp(App);
app.use(ToastPlugin)
app.use(store)
app.use(router)
app.mount('#app')

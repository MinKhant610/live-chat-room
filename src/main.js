import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
import { auth } from './firebase/config'

let app;
// when page refresh app will null or falsely value
// init state when we connect auth libary
// wait auth lib to connect 
auth.onAuthStateChanged(()=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})


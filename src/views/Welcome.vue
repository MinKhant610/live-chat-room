<template>
    <div class="welcome container">
        <div v-if="show_login_form">
            <Login @enterChatroom="enterChatroom"></Login>
            <p>Not a member? <span @click="show_login_form = !show_login_form">create account</span></p>
        </div>
        <div v-else>
            <SignUp @enterChatroom="enterChatroom"></SignUp>
            <p>Already member? <span @click="show_login_form = !show_login_form">Login Account</span></p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'

export default {
  components: {
    Login, SignUp },
        setup(){
            let show_login_form = ref(true)
            let router = useRouter()
            let enterChatroom = ()=>{
                router.push({name:'chatroom'})
            }
            return {show_login_form, enterChatroom}
        }
    }
</script>

<style>
    .welcome{
        padding: 20px 0;
        text-align: center;
    }
      /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .welcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button {
        margin: 20px auto;
    }
</style>
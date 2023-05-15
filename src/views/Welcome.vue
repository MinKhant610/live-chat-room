<template>
    <div class="welcome container">
        <div v-if="show_login_form">
            <Login></Login>
            <p>Not a member? <span @click="show_login_form = !show_login_form">create account</span></p>
        </div>
        <div v-else>
            <SignUp></SignUp>
            <p>Already member? <span @click="show_login_form = !show_login_form">Login Account</span></p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },
        setup(){
            let show_login_form = ref(true)
            
            return {show_login_form}
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
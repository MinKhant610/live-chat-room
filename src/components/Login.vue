<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from '@/firebase/config';
import useLogin from '@/composable/useLogin'

    export default {
        setup(){
            let email = ref("");
            let password = ref("");

            let {error, signIn} = useLogin();

            let login = async()=>{
                let response = await signIn(email.value, password.value);
                if (response){
                    console.log("success")
                }
            }

            return{email, password, login, error}
        }
    }
</script>
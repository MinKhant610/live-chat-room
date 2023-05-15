<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup(){
            let email = ref("");
            let password = ref("");

            let login = ()=>{
                console.log(email.value)
            }

            return{email, password, login}
        }
    }
</script>

<style>

</style>
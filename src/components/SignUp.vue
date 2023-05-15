<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="Username" required v-model="name">
        <input type="email" placeholder="Email" required v-model="email">
        <input type="password" placeholder="Password" required v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup(){
            let name = ref("");
            let email = ref("");
            let password = ref("");

            let signUp = ()=>{
                console.log(name.value)
            }

            return{name, email, password, signUp}
        }
    }
</script>

<style>

</style>
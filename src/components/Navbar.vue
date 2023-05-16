<template>
    <nav v-if="user">
        <div>
            <p>Hello {{ user.displayName }}</p>
            <p class="email">Logged in as {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>

import useLogout from '@/composable/useLogout'
import getUser from '@/composable/getUser'
    export default {
        setup(){
            let {error, logoutAcc} = useLogout();
            let {user} = getUser();

            let logout = async ()=>{
                await logoutAcc();
                if (error.value){
                    console.log(error.value)
                }
            }
            
            return {logout, user}
        }
    }
</script>

<style>

</style>
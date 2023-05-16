import { auth } from "@/firebase/config";
import { ref } from "vue";

// when login logout sing up state change this function will work and return user
let user = ref(auth.currentUser);
auth.onAuthStateChanged((_user)=>{
    user.value = _user;
})

let getUser = ()=>{
    return {user}
}

export default getUser;
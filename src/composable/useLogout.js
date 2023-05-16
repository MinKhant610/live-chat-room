import { ref } from "vue";
import { auth } from "@/firebase/config";

let error = ref(null);

let logoutAcc = async()=>{
    try{
        await auth.signOut();
        console.log("logout");
    }catch(err){
        error.value = err.message;
    }
}

let useLogout = () =>{
    return {error, logoutAcc};
}

export default useLogout;
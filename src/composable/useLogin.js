import { ref } from "vue";
import { auth } from "@/firebase/config";

let error = ref(null);

let signIn = async (email, password)=>{
    try{
        let response = await auth.signInWithEmailAndPassword(email, password)
        if (!response){
            throw new  Error("Can't login account");
        }
        return response;
    }catch(err){
        error.value = err.message;
    }
}

let useLogin = ()=>{
    return {error, signIn};
}

export default useLogin;
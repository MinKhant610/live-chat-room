import { ref } from "vue";
import { auth } from "@/firebase/config";
let error = ref(null);

let createAccount = async(email, password, name)=>{
    try{
        let response = await auth.createUserWithEmailAndPassword(email, password)
        if (!response){
            throw new Error("Could not create new user");
        }
        // to add name boz auth has only email and pass
        response.user.updateProfile({displayName : name});
        return response;
    }catch(err){
        error.value = err.message;
    }
}

let useSignup = ()=>{
    return {error, createAccount};
}

export default useSignup;
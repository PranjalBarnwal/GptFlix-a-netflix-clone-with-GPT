export const isValid=(email,password)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid=emailRegex.test(email);
    const passRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const isPassValid=passRegex.test(password);
    if(!isEmailValid){
        
        return "Email is not valid";
    }
    else if(!isPassValid){
        
        return "Password must contain capital letters,special character and number and length greater than 8"
    }
    return null;
}
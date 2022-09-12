export const setToLocalStorage = (token)=>{
    if(token){
        localStorage.setItem("token",token)
    }
}

export const removeFromLocalStorage = (token)=>{
    if(token){
        localStorage.removeItem(token);
    }
}

export const getTokenFromLocalStorage = ()=>{
    return localStorage.getItem("token");
}
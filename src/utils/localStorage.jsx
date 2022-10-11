export const setToLocalStorage = (key,value)=>{
    if(key){
        localStorage.setItem(key,value)
    }
}

export const removeFromLocalStorage = (value)=>{
    if(value){
        localStorage.removeItem(value);
    }
}

export const getTokenFromLocalStorage = (val)=>{
    return localStorage.getItem(val);
}
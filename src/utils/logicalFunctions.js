export const shorteningTitle = (title)=>{
    if(title.length > 16){
        title = title.split("");
        title.splice(20,title.length-1);
        let x = title.join("")+"...";
        return x   
    }
}
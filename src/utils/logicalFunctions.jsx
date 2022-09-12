export const shorteningTitle = (title)=>{
    if(title.length > 16){
        title = title.split("");
        title.splice(20,title.length-1);
        let x = title.join("")+"...";
        return x   
    }
}

export const notification = (toast,title,description,status)=>{
            toast({
              title: title,
              description: description,
              status: status,
              duration: 2000,
              isClosable: true,
            })
}
import { toast } from "react-toastify"

const getStoredReadLists=()=>{

    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
            const storedList= JSON.parse(storedListStr)
            return storedList
    }

    else{
        return []
    }

}

const addToStoredReadLists=(id)=>{

    const storedList= getStoredReadLists();
    if(storedList.includes(id)){
        console.log(id , 'id already exists in the list')
    }
    else{
        storedList.push(id)
        const storedListStr= JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
        toast('this book is added to your readlist')
    }

}
const getStoredWishLists=()=>{

    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
            const storedWishList= JSON.parse(storedWishListStr)
            return storedWishList
    }

    else{
        return []
    }

}

const addToStoredWishLists=(id)=>{

    const storedWishList= getStoredWishLists();
    if(storedWishList.includes(id)){
        console.log(id , 'id already exists in the list')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr= JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr)
        toast('this book is added to your wishlist')
    }

}



export{addToStoredReadLists,addToStoredWishLists,getStoredReadLists,getStoredWishLists}
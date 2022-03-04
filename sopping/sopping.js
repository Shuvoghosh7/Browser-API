const displayLocalStorageCart = ()=>{
const cart = getCart()
for(const name in cart){
    displayProduct (name)
}
}
const addItem =()=>{
    const nameFiled= document.getElementById("product-name")
    const name =nameFiled.value
    if(!name){
        return
    }
    //add ul 
    displayProduct(name)
    //add to local storage
    addProductTocart(name)

    nameFiled.value=''
}

const displayProduct = productName =>{
    const ul = document.getElementById("product")
    const li =document.createElement('li')
    li.innerText=productName
    ul.appendChild(li)
}

const getCart = () =>{
    const cart =localStorage.getItem('cart')
    let cartObject
    if(cart){
        cartObject=JSON.parse(cart)
    }else{
        cartObject={}
    }
    return cartObject
}

const addProductTocart = name =>{
    const cart =getCart()
    if(cart[name]){
        cart[name] = cart[name] +1
    }else{
        cart[name]=1
    }
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfy)

}
const plaseOrder = () =>{
    document.getElementById("product").textContent=''
    localStorage.removeItem('cart')
}
displayLocalStorageCart()
export const setupCart = () => {
    if(!localStorage.getItem("@CART")) {
        localStorage.setItem("@CART", JSON.stringify([]))
    }
}

export const addToCart = (item) => {

    const cart = JSON.parse(localStorage.getItem("@CART"))
    
    const index = cart.findIndex(element => element.id == item.id)

    if(index) {
        cart[index].qtd++
    } else {
        cart.push({ ...item, qtd: 1 })
    }

    localStorage.setItem("@CART", JSON.stringify(cart))
}

export const removeFromCart = (id) => {

    const cart = JSON.parse(localStorage.getItem("@CART"))

    localStorage.setItem("@CART", cart.filter(element => element.id != id))
}
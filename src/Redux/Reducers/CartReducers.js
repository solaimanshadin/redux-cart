import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/Actions"

const initialSate = {
    cart : [],
    products : [
        {
            id: 1,
            name: "Lenovo",
        },
        {
            id: 2,
            name: "Dell",
        },
        {
            id: 3,
            name: "HP",
        },
        {
            id: 4,
            name: "Tosiba",
        },
        {
            id: 4,
            name: "Asus",
        },
    ],
}
const cartReducer = (state = initialSate , action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action)
            const newItem = {
                productId : action.id ,
                name : action.name,
                cartId : state.cart.length + 1
             }
            const newCart = [...state.cart , newItem];
            return {...state , cart : newCart} 
            break;
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item =>  item.cartId != id) 

            return {...state ,cart : remainingCart }
        default :
            return state
    }
}

export default cartReducer;
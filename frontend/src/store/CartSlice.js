import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const storedItems = localStorage.getItem("cart-items") ? 
    JSON.parse(localStorage.getItem("cart-items")):[]

const initialState ={
    cartItems:storedItems,
    totalQuantity:0,
    totalAmount:0
}

const CartSlice = createSlice({
    name:"cart",
    initialState,  
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.product} quantity has been increased.`,{
                    position:'top-left',
                })
            }else{
                const tempProducts = {...action.payload,cartQuantity:1}
                state.cartItems.push(tempProducts)
                toast.success(`${action.payload.product} has been added to cart.`,{
                    position:'top-left',
                })
            }
            localStorage.setItem("cart-items",JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer 
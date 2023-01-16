import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer,{ productsFetch } from './ProductsSlice'
import { ProductsApi } from './ProductsApi'
import CartReducer from './CartSlice'

const store = configureStore({
    reducer:{
        products: ProductsReducer,
        cart: CartReducer,
        [ProductsApi.reducerPath]:ProductsApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ProductsApi.middleware)
    },
})

store.dispatch(productsFetch())

export default store
import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer,{ productsFetch } from './ProductsSlice'
import { getTotals } from './CartSlice'
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
store.dispatch(getTotals())

export default store
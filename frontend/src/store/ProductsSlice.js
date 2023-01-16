import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    items:[],
    status:null
}

//creates a payload
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async() =>{
        const response = await axios.get('http://localhost:4001/products')
        return response?.data
    }
    //to fetch single product with createAsyncThunk
    // async(id=null,rejectWithValue) =>{
    //     try{
    //         const response = await axios.get('http://localhost:4001/products')
    //         return response?.data
    //     }
    //     catch(err){
    //         return rejectWithValue(err.response.data)
    //     }
    // }
)

const ProductsSlice = createSlice({
    name:"products",
    initialState,
    reducer:{
        
    },
    extraReducers:{
        [productsFetch.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [productsFetch.fulfilled]:(state,action)=>{
            state.status = 'success';
            state.items = action.payload
        },
        [productsFetch.rejected]:(state,action)=>{
            state.status = 'rejected'
        },
    }
})
//extraReducers is used to define state from out of the slice -- you only take the type and not actions
//using immer redux toolkit can update state -- no need to spread out the original state
export default ProductsSlice.reducer
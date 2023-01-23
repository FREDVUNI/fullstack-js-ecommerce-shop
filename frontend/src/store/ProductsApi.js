import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//api service
export const ProductsApi = createApi({
    reducerPath:"ProductsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://full-stack-api.onrender.com' }),
    endpoints: (builder) =>({
        getAllProducts:builder.query({
            query:() => "/products",
        }),
        getProduct:builder.query({
            query:(id) => `/products/${id}`,
            // providesTags: (result, error, id) => [{ type: "products", id }],
        }),
    }),
});

export const { useGetAllProductsQuery,useGetProductQuery } = ProductsApi
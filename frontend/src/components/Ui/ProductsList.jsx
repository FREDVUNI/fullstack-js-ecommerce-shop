import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
    return (
        <>
            {
                data?.length > 0 ?(
                data?.map((item) =>{
                    return(
                        <ProductCard item={item} key={item.id}/>
                    )
                })
                ):(
                    <p className="text-center mt-5">There are no products available</p>
                )
            }
        </>
    )
}

export default ProductsList

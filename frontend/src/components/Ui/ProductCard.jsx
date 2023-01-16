import React,{ useEffect } from 'react'
import { motion } from 'framer-motion'
import '../../styles/productCard.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { addToCart,getTotals } from '../../store/CartSlice'
import { useDispatch,useSelector } from "react-redux"

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }

    useEffect(() =>{
        dispatch(getTotals())
    },[cart,dispatch])

    return (
        <Col lg="3" md="3">
        <div className="product__item">
            <Link to={`/product/${item.id}`}>
                <motion.div whileHover={{ scale:1.1 }} className="product__img">
                    <img src={item.image} alt="product" className="w-100"/>
                </motion.div>
            </Link> 
            <div className="p-2 product__info">
                <h3 className="product">
                    <Link to={`/product/${item.id}`}>{item.product}</Link> 
                </h3>
                <span className="text-center d-inline-block">{item.category}</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                <span className="price"> {item.price}</span>
                <motion.span whileTap={{ scale:1.2 }}>
                    <i className="ri-add-line" onClick={ () => handleAddToCart(item) }></i>
                </motion.span>
            </div>
        </div>
        </Col>
    )
}

export default ProductCard

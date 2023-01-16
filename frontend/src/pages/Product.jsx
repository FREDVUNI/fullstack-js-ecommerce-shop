import React,{ useState,useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
// import products from '../assets/data/products'
// import ProductsList from '../components/Ui/ProductsList'
import '../styles/product.css'
import Related from './Related'
import { useGetProductQuery } from '../store/ProductsApi'
import Loader from '../loader/Loader'
import { addToCart } from '../store/CartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
    const {id} = useParams()
    const { data,isLoading,error } = useGetProductQuery(id);
    const [tab,setTab] = useState('desc')

    const dispatch = useDispatch();

    const handleAddToCart = (data) =>{
        dispatch(addToCart(data))
    }
    // console.log(data)

    useEffect(() =>{
        window.scroll(0,0)
    },[data,id])

    return (
    <>
    {
    isLoading ? (
        <section>
            <Container>
                <Row>
                <Col lg="12" className="text-center align-items-center">
                    <Loader/>
                </Col>
                </Row>
            </Container>
        </section>
        ) : error ? (
        <p>something went wrong.</p>
        ):(
        data.length > 0 ? 
        <Helmet title={`${data[0].product}`}>
        <CommonSection title={`${data[0].product}`}/>
        <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <img src={data[0].image} alt="product"/>
                </Col>
                <Col lg='6'>
                    <div className="product__details">
                        <h2>{data[0].product}</h2>
                        <div className="product__rating d-flex align-items-center gap-3 mb-3">
                            <div>
                                <span>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                    <i className="ri-star-half-s-fill"></i>
                                </span>
                            </div>
                            {/* <p>({avgRating} ratings)</p> */}
                        </div>
                        <div className="d-flex align-items-center gap-5">
                            <span className="product__price">{data[0].price}</span>
                            <span>Category: {data[0].category.toUpperCase()}</span>
                        </div>
                        <p className="mt-3">{data[0].details}</p>
                        <motion.button whileTap={{ scale:1.2 }} className="shop__btn" onClick={ () =>handleAddToCart(data[0]) }>
                            Add to cart
                        </motion.button>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="tab__wrapper d-flex align-items-center gap-5">
                            <h6 className={ `${tab === 'desc' ? 'active__tab' : ''}` } onClick={() => setTab('desc')}>Description</h6>
                            <h6 className={ `${tab === 'rev' ? 'active__tab' : ''}` } onClick={()=> setTab('rev')}>Reviews (0)</h6>
                        </div>
                        {
                            tab === "desc" ?
                            <div className="tab__content mt-5">
                                <p>{data[0].details}</p>
                            </div>
                            :
                            <div className="product__review mt-5">
                                <div className="review__wrapper">
                                    <ul>
                                        {/* {
                                            reviews.map((item,index) =>(
                                            <li key={index} className="mb-4">
                                                    <h6>Jane Doe</h6>
                                                    <span>{item.rating} ( rating)</span>
                                                    <p>{item.text}</p>
                                                </li> 
                                            ))
                                        } */}
                                        <p>There are no reviews yet ...</p>
                                    </ul>
                                    <div className="review__form">
                                        <h4>Leave your experience here ...</h4>
                                        <form>
                                            <div className="form__group">
                                                <input type="text" placeholder="Enter name"/>
                                            </div>
                                            <div className="form__group d-flex align-items-center gap-5 rating__group">
                                                <motion.span whileTap={{ scale:1.2 }}>1 <i className="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{ scale:1.2 }}>2 <i className="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{ scale:1.2 }}>3 <i className="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{ scale:1.2 }}>4 <i className="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{ scale:1.2 }}>5 <i className="ri-star-s-fill"></i></motion.span>
                                            </div>
                                            <div className="form__group">
                                                <textarea rows={4} placeholder="Review message"/>
                                            </div>
                                            <motion.button whileTap={{ scale:1.2 }} className="shop__btn">Submit</motion.button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        <Col lg="12" className="text-center mb-5">
            <Related category={`${data[0].category}`}/>
        </Col>
        </Helmet> 
        :
        <>
        <CommonSection title={`The product was not found.`}/>
        <section>
            <Container> 
                <Row>
                <Col lg="12" className="text-center align-items-center">
                    <span>
                        <i className="ri-file-damage-line ri-10x text-muted"></i>
                    </span>
                    <h1 className="text-muted">The product was not found.</h1>
                </Col>
                </Row>
            </Container>
        </section>
        </>
        )
    }
    </>
    )
}

export default Product

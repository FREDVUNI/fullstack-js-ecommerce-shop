import React,{ useState,useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Col,Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/Ui/ProductsList'
import Clock from '../components/Ui/Clock'
// import products from '../assets/data/products'
// import counterImg from '../assets/images/counter-timer-img.png'
import { useGetAllProductsQuery } from '../store/ProductsApi'
import Loader from '../loader/Loader'

const Home = () => {
  const year = new Date().getFullYear()
  const { data,error,isLoading } = useGetAllProductsQuery();

  const [trending,setTrending] = useState([])
  const [best,setBest] = useState([])
  const [laptops,setLaptops] = useState([])
  const [phones,setPhones] = useState([])
  const [headsets,setHeadsets] = useState([])

  useEffect(() =>{
    const getProducts = () =>{
      let filterTrending = data?.filter((item) => item.category === "phones" || item.category === "Cameras")
      setTrending(filterTrending)

      let filterLaptops = data?.filter((item) => item.category === "laptops" || item.category === "phones")
      setBest(filterLaptops)

      let filterHeadsets = data?.filter((item) => item.category === "Headsets" || item.category === "Fridges")
      setHeadsets(filterHeadsets)

      let filterPhones = data?.filter((item) => item.category === "phones")
      setPhones(filterPhones)

      let filterPopular = data?.filter((item) => item.category === "laptops" || item.category === "phones")
      setLaptops(filterPopular)
    }
    getProducts()
  },[data])
  window.scroll(0,0)
  
  return (
  <>
    <Helmet title={''}>
      <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Products In {year}</p>
              <h2>Make your interior modern and minimalistic</h2>
              <p>
                lorem ipsum Make your interior modern and minimalistic
                lorem ipsum Make your interior modern and minimalistic
                lorem ipsum Make your interior modern and minimalistic
              </p>
              <motion.button whileTap={{ scale:1.2 }} className="shop__btn">
                <Link to="shop">SHOP NOW</Link>  
              </motion.button>  
            </div>  
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg"/>   
            </div>  
          </Col> 
        </Row>  
      </Container>    
      </section>
      <Services/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
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
                <p>something went wrong</p>
              ):(
                <ProductsList data={trending}/>
              )
            }
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
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
                <p>something went wrong</p>
              ):(
                <ProductsList data={best}/>
              )
            }
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Stuff</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{ scale:1.2 }} className="shop__btn store__btn">
                <Link to="/shop" >visit store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src='https://kanzucode-iconic.netlify.app/assets/images/pic.png' alt="counter"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
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
                <p>something went wrong</p>
              ):(
                <>
                <ProductsList data={phones}/>
                <ProductsList data={headsets}/>
                </>
              )
            }
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular Products</h2>
            </Col>
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
                <p>something went wrong</p>
              ):(
                <>
                <ProductsList data={laptops}/>
                </>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  </>
  )
}

export default Home
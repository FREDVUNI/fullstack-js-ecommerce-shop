import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
// import { useGetAllProductsQuery } from '../../store/ProductsApi'

const Footer = () => {
  let year = new Date().getFullYear();
  // let { data,isLoading,error } = useGetAllProductsQuery();
  
  return (
    <footer className="footer">
        <Container>
          <Row>
            <Col lg='4' className="mb-4" md='6'>
              <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                  <h1 className="text-white">Multimart</h1>
                </div>
              </div>
              <p className="footer__text mt-4">
                  lorem v lorem lorem multimart lorem v lorem lorem multimart lorem v lorem lorem multimart
                  lorem v lorem lorem multimart lorem v lorem lorem multimart lorem v lorem lorem multimart
              </p>
            </Col>
            <Col lg='3' md='3' className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Top Categories</h4>
                <ListGroup>
                  {/* { isLoading ? (<p>Loading ...</p>)
                  :error ?(<p>Something went wrong ...</p>):
                    data?.length > 0 ?
                    data?.map((item)=>(
                    <ListGroupItem key={item.id}>
                      <Link to="/shop">{item.category}</Link>
                    </ListGroupItem>

                  )):( <p>There are categories.</p> )
                  } */}
                  <ListGroupItem>
                    <Link to="/shop">Cameras</Link>
                  </ListGroupItem> 
                  <ListGroupItem>
                    <Link to="/shop">Cameras</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/shop">Fridges</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/shop">Headsets</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='2' md='3' className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Links</h4>
                <ListGroup>
                  <ListGroupItem>
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/login">Login</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='3' md='4' >
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Contacts</h4>
                <ListGroup className="footer__contact">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    <p>1233 Kampala, Road Street Island, Uganda</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-phone-line"></i>
                    </span>
                    <p>+ 52462 6727535 535 <br/> + 52462 6727535 535</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    <p>here@multimart.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='12'>
              <p className="footer__copyright"> copyright &copy; {year}. Multimart shop.</p>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
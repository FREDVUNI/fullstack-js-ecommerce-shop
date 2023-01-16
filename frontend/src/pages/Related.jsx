import React from 'react'
import ProductsList from '../components/Ui/ProductsList'
import { Container,Row,Col } from 'reactstrap'
import Loader from '../loader/Loader'
import { useGetAllProductsQuery } from '../store/ProductsApi'

const Related = ({category}) => {
    
    const {data,isLoading,error} = useGetAllProductsQuery()
    const relatedData = data?.filter((item) => item.category === category)

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
            relatedData.length > 0 ? 
            <section className="related__products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">Related Products</h2>
                        </Col>
                        <ProductsList data={relatedData}/>
                    </Row>
                </Container>
            </section> 
            :
            <>
                <span>
                <i className="ri-file-damage-line ri-10x text-muted"></i>
                </span>
                <h1 className="text-muted">There are no related products.</h1>
            </>
            )
        }
        </>
    )
}

export default Related
import React from 'react'
import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'

const NotFound = ({title}) =>{
    return(
        <Helmet title={'Page Not Found'}>
            <CommonSection title={'Page Not Found'}/>
            <section>
            <Container>
                <Row>
                    <Col lg="12" md="6" className="text-center">
                        <h1 className="text-muted">{title}</h1>
                        <span>
                            <i className="ri-file-damage-line ri-10x text-muted"></i>
                        </span>
                    </Col>
                </Row>
            </Container>
            </section>
        </Helmet>
    )
}

export default NotFound
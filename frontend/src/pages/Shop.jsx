import React ,{useState } from 'react'
import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
// import products from '../assets/data/products' 
import ProductsList from '../components/Ui/ProductsList'
import { useGetAllProductsQuery } from '../store/ProductsApi'
import Loader from '../loader/Loader'

const Shop = () => {
  const  {data,isLoading,error} = useGetAllProductsQuery()
  const [productData,setProductData] = useState(data)

  const handleFilter = (e) =>{
      const filterValue = e.target.value;

      if(filterValue === "all"){
        setProductData(data)
      }

      if(filterValue === "phones"){
        let filterProducts = data.filter(( item ) => item.category ==="phones") 
        setProductData(filterProducts)
      }

      if(filterValue === "Cameras"){
        let filterProducts = data.filter(( item ) => item.category ==="Cameras") 
        setProductData(filterProducts)
      }

      if(filterValue === "laptops"){
        let filterProducts = data.filter(( item ) => item.category ==="laptops") 
        setProductData(filterProducts)
      }

      if(filterValue === "Headsets"){
        let filterProducts = data.filter(( item ) => item.category ==="Headsets") 
        setProductData(filterProducts)
      }

      if(filterValue === "Fridges"){
        let filterProducts = data.filter(( item ) => item.category ==="Fridges") 
        setProductData(filterProducts)
      }
  }

  const handleSearch = (e) =>{
    const searchValue = e.target.value;

    const filterProducts = data.filter((item) => item.product.toLowerCase().includes(searchValue.toLowerCase()));
    setProductData(filterProducts)
  }

  window.scroll(0,0)

  return (
    <Helmet title={'shop'}>
        <CommonSection title={'Products'}/>
        <section>
          <Container>
            <Row>
              <Col lg='3' md='6'>
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="all">All products</option>
                    <option value="phones">Phones</option>
                    <option value="Cameras">Cameras</option>
                    <option value="laptops">laptops</option>
                    <option value="Headsets">Headsets</option>
                    <option value="Fridges">Fridges</option>
                  </select>
                </div>
              </Col>
              <Col lg='3' md='6' className="text-end">
                <div className="filter__widget">
                  <select>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg='6' md='12'>
                <div className="search__box">
                  <input type="text" placeholder="search product ..." onChange={handleSearch}/>
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
        <Container>
          <Row>
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
                productData.length > 0 ? <ProductsList data={productData}/> 
                :
                <>
                  <span>
                    <i className="ri-file-damage-line ri-10x text-muted"></i>
                  </span>
                  <h1 className="text-muted">No Products Were Found</h1>
                </>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
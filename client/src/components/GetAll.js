import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import ProductCard from './ProductCards'
import HandleSelection from './HandleSelection'
import MovingPictures from  './MovingPictures'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const GetAll = () => {
  const [products, setProducts] = useState([])
  const [hasError, setHasError] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  const typesOfProducts = ['all']
  let type = 'all'
  const searchProducts = ''


  // Request to API on first render
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products/') 
        console.log('DATA from initial API render ->', data)
        setProducts(data)
      } catch (err) {
        setHasError(true)
      }

    }
    getData()
  }, [])

  // default display for 'all' product types (types)
  // const getProductTypes = () => {
  //   products.map(product => {
  //     if (!typesOfProducts.include(product.type)) {
  //       typesOfProducts.push(product.type)
  //     }
  //   })
  // }

  // filter products
  const filterProducts = () => {
    const regexSearch = new RegExp(searchProducts, 'i')
    console.log('regexSearch ->', regexSearch)
    const filteredArray = products.filter(product => {
      return (
        regexSearch.test((product.name) && (product.type === type || type === 'all'))
      )
    })
    setFilteredProducts(filteredArray)
    console.log('FILTERED ARRAY->', filteredArray) // Showing all 3
  }

  // set product type when checkbox is handleSelected
  const handleSelected = (event) => {
    type = [event.target.value]
    filterProducts()
    console.log('🌟 BUTTONS EVENT TARGET VALUE ->', event.target.value)
  }

  // getProductTypes()
  


  return (
    <>
      <Container fluid className="page-wrapper"> 
        <Row className="align-items-center index-hero-row">
          <Col>
            <h1>SOME HERO TEXT HERE ABOUT OUR AMAZING PRODUCTS</h1>
          </Col>
        </Row>
        <hr/>
        <Row>
          < MovingPictures />
        </Row>
        <hr />
        <Row>
          < HandleSelection 
            typesOfProducts = {typesOfProducts}
            handleSelected = {handleSelected}
          />
        </Row>
        <hr />
        { products ? 
          <>
            <Row className="products-display">
              <Col>
                < ProductCard
                  products = {products}
                  filteredProducts = {filteredProducts}
                />
              </Col>
            </Row>
          </>
          :
          <h3 className="error-message">
            { hasError ? 'Oops, something went wrong' : 'Loading...'}
          </h3>

        }
      </Container>
    </>
  )
}

export default GetAll
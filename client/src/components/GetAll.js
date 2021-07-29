import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import ProductCard from './ProductCards'
import HandleSelection from './HandleSelection'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const GetAll = () => {
  const [products, setProducts] = useState([])
  const [hasError, setHasError] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)

  const typesOfProducts = 'all'
  let diets = ['all']
  const searchProducts = ''


  // Request to API on first render
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/foods/') 
        console.log('DATA from initial API render ->', data)
        setProducts(data)
      } catch (err) {
        setHasError(true)
      }

    }
    getData()
  }, [])

  // default display for 'all' product types (diets)
  // const getProductTypes = () => {
  //   products.map(product => {
  //     if (!typesOfProducts.include(product.diets[])) {
  //       typesOfProducts.push(product.diets[])
  //     }
  //   })
  // }

  // filter products
  const filterProducts = () => {
    const regexSearch = new RegExp(searchProducts, 'i')
    console.log('regexSearch ->', regexSearch)
    const filteredArray = products.filter(product => {
      return (
        regexSearch.test(product.name) && (product.diets === diets || diets === 'all' )
      )
    })
    setFilteredProducts(filteredArray)
  }

  // set product type (diets) when checkbox is handleSelected
  const handleSelected = (event) => {
    diets = [event.target.value]
    filterProducts()
    console.log('🌟 BUTTONS EVENT TARGET VALUE ->', event.target.value)
  }

  // getProductTypes()
  


  return (
    <Container fluid className="page-wrapper"> 
      <Row className="align-items-center index-hero-row">
        <Col>
          <h1>SOME HERO TEXT HERE ABOUT OUR AMAZING PRODUCTS</h1>
        </Col>
      </Row>
      <Row>
        < HandleSelection 
          typesOfProducts = {typesOfProducts}
          handleSelected = {handleSelected}
        />
      </Row>
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
  )
}

export default GetAll
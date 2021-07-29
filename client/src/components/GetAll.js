import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GetAll = () => {
  const [products, setProducts] = useState([])






  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/foods/') 
        console.log(data)
        setProducts(data)
      } catch (err) {
        console.log(err)
      }

    }
    getData()
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          {products.map(product => <p key={product._id}>{product.name}</p>)}
        </Col>
      </Row>
    </Container>
  )
}

export default GetAll
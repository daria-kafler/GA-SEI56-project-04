import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = ({ products, filteredProducts }) => {
  console.log('FILTERED PRODUCTS->', filteredProducts)

  return (
    <>
      {products.map( ( product ) => {
        return (
          <Card key={products._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
            <Button variant="prmary">Add</Button>
          </Card>
        )
      })}
    </>
  )
}

export default ProductCard
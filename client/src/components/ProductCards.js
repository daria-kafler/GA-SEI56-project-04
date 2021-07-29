import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = ({ products, filteredProducts }) => {
  console.log('FILTERED PRODUCTS->', filteredProducts)

  return (
    <>
      {(filteredProducts.length > 0 ? filteredProducts : products).map( ( product ) => {
        return (
          <Card key={products._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>£<span>{product.price}</span> <Button>Add</Button></Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default ProductCard
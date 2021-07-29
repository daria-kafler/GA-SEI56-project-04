import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {

  return (
    <>
      <Container fluid className="page-wrapper">
        <Row>
          <Col>
            <h1>Whatever <span>life</span> throws at you </h1>
            <h1>why not be <span>prepared</span>?</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
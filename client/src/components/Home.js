import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import image from '../styles/assets/WFH_svg/wfh_8.png'

const Home = () => {

  return (
    <>
      <Container fluid className="page-wrapper">
        <Row>
          <Col className="text">
            <h1>Whatever life <span>throws</span> at you </h1>
            <h1>why not be <span>prepared</span>?</h1>
            <br/>
            <Button><p>Browse</p></Button>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
        <Row>
          <Col >
            <Image src={image} alt="work-from-home-image" className="image"/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
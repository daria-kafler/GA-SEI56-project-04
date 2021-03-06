import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Register = () => {

  return (
    <Container fluid className="page-wrapper">
      <Row>
        <Col className="register-form-parent">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                <p>We&#39;ll never share your email with anyone else.</p>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
              <p>Submit</p>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
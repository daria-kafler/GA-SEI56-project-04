import React from 'react'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const HandleSelection = ({ handleSelected }) => {

  return (
    <Col>
      <ButtonGroup aria-label="Basic example">
        <Button className="first-aid" value="1" onClick={handleSelected}>First Aid</Button>
        <Button className="grow-your-own" value="2" onClick={handleSelected}>Grow your own</Button>
        <Button className="Wearable" value="3" onClick={handleSelected}>Wearable</Button>
      </ButtonGroup>
    </Col>
  )


}

export default HandleSelection
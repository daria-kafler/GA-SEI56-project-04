import React from 'react'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const HandleSelection = ({ handleSelected }) => {

  return (
    <Col className="handle-selection-buttons">
      <ButtonGroup aria-label="Basic example">
        <Button className="first-aid" value="First Aid" onClick={handleSelected}>First Aid</Button>
        <Button className="grow-your-own" value="Grow your own" onClick={handleSelected}>Grow your own</Button>
        <Button className="Wearable" value="Wearables" onClick={handleSelected}>Wearable</Button>
      </ButtonGroup>
    </Col>
  )


}

export default HandleSelection
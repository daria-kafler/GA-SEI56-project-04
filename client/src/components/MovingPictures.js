import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imageOne from '../styles/assets/carousel/manwithbowlofsmalltomatoes.jpeg'
import imageTwo from '../styles/assets/carousel/steady-hand-co-760K7ArRBAE-unsplash.jpg'
import imageThree from '../styles/assets/carousel/raychan-Kr1-Ew4bhSE-unsplash.jpg'


const MovingPictures = () => {

  // const [index, setIndex] = useState(0)

  // const handleSelect = (selectedIndex, event) => {
  //   setIndex(selectedIndex)
  //   console.log(event.target.value)
  // }
  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grow your own</h3>
          <p>We sell a veriaty of vegetable and fruit seeds- for the long haul</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sturdy Boots</h3>
          <p>Shop our range or sturdy feet protectors</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fuel</h3>
          <p>Sometimes all we have is hot water, be sure to spice it up</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
  
  
}
export default MovingPictures
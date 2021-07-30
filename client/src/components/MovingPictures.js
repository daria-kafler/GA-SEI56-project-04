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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
  
  
}
export default MovingPictures
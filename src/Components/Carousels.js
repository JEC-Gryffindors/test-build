import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

function Carousels() {
  return (
    <Carousel className="topfire">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/11/1600x592.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/10/NSS-YUVA-Udsav.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/09/jec.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/08/banner-1.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/08/jeya.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jec.ac.in/wp-content/uploads/2022/08/iic-banner.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

import React from 'react';
import Img1 from "../../assets/image1.jpg";
import Img2 from "../../assets/image2.jpg";
import Img3 from "../../assets/image3.jpg";
import Img4 from "../../assets/image4.jpg";
import Img5 from "../../assets/image5.jpg";
import Img6 from "../../assets/image6.jpg";
import Img7 from "../../assets/image7.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "../../../src/App.css";

export const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  const images = [
    { id: 1, src: Img1 },
    { id: 2, src: Img2 },
    { id: 3, src: Img3 },
    { id: 4, src: Img4 },
    { id: 5, src: Img5 },
    { id: 6, src: Img6 },
    { id: 7, src: Img7 },
  
  ];

  return (
    <div>
      <h2 className="carousel-heading">Popular Movies</h2>
      <Slider style={{ width: "90%", marginLeft: "5%" }} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.src} alt={`Slide ${image.id}`} />
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

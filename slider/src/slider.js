import React, {useState} from 'react'

import BtnSlider from './Btn'


export default function Slider() {
  const dataSlider = [
    {
      img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      text: "Caption Text 1",
    },
    {
      img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      text: "Caption Text 2",
    },
    {
      img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      text: "Caption Text 3",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === dataSlider.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(dataSlider.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }


  return (
    <div className="container-slider">
        {dataSlider.map((item, index) => {
            return (
                <div
                key={index}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                  
                    <img src={item.img} alt={item.index} />
                    <span>{item.text}</span>                    
                    
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 3}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
    </div>
)

}

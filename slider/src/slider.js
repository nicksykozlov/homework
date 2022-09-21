import React, {useState, useEffect} from 'react'

import BtnSlider from './Btn'


export default function Slider() {
  const slides  = [
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
  const [isPause, setPause] = useState(false);

  const nextSlide = () => {
      if(slideIndex !== slides.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === slides.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(slides.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  useEffect(() => {
    

    const interval = setInterval(() => {
        // if(!isPause){}
        nextSlide();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isPause]);


  return (
    <div className="container-slider"
    // onMouseOver={()=>useState(true)}
    // onMouseOut={()=>useState(false)}
    >
        {slides.map((item, index) => {
            return (
                <div
                key={index}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                  
                    <img src={item.img} alt="" />
                    <span>{item.text}</span>                    
                    
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 3}).map(( item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
    </div>
)

}

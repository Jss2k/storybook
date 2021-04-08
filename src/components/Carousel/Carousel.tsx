import Arrows from './Arrow'
import SliderContent from './SliderContent'
import image1 from './../../assets/image_1.jpg';
import image2 from './../../assets/image_5.jpg';
import image3 from './../../assets/image_3.jpg';
import image4 from './../../assets/image_2.jpg';
import image5 from './../../assets/image_5.jpg';
import styles from './Carousel.module.scss';
import { useState } from 'react'
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ]

  const sliderLenth = images.length - 1

  return (
    <div className={styles.sliderContainer}>
      <SliderContent activeIndex={activeIndex} images={images}/>
      <Arrows
        prevSlide={() => 
          setActiveIndex(activeIndex < 1 ? sliderLenth : activeIndex - 1)
        }
        nextSlide={() => 
          setActiveIndex(activeIndex === sliderLenth ? 0 : activeIndex + 1)
        }
        />

    </div>
  )
}

export default Slider
import styles from './Carousel.module.scss';

function SliderContent(props: { activeIndex: number, images: {}[] }) {

  return (
    <div className={styles.sliderContent} >
      {props.images.map((slide: any, index: number) => (
        <div
          key={index}
          className={index === props.activeIndex ? styles.active : styles.inactive}
        >
          <img className={styles.slideImage} src={slide.image} alt='slide' />
        </div>
      ))}
    </div>
  )
}

export default SliderContent
import styles from './Carousel.module.scss';

function Arrows(props: { prevSlide: any, nextSlide: any }) {
  return (
    <div className={styles.sliderArrows}>
      <button className={styles.prev} onClick={props.prevSlide}>
        назад
      </button>
      <button className={styles.next} onClick={props.nextSlide}>
        вперёд
      </button>
    </div>
  )
}

export default Arrows
import { useEffect, useRef } from 'react'

import styles from './RangeSlider.module.scss'

function RangeSlider({...props}) {

  const rangeRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (rangeRef && rangeRef.current) {
      const rangeValue = parseInt(rangeRef.current.value, 10)
      rangeLinearGradient(rangeValue, props.min, props.max)
    }
  })

  const handleChange = (max: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }

    rangeLinearGradient(parseInt(e.target.value), props.min, max);
}

  const calculatePercentage = (value: number, min: number, max: number) => ((value - min) / (max - min)) * 100 + '%'

  const rangeLinearGradient = (value: number, min: number, max: number) => {
    const percentage = calculatePercentage(value, min, max)
    const newBackgroundStyle = `linear-gradient(90deg, #FF9500 0% ${percentage}, #EBEDEE ${percentage} 100%)`;
    if(rangeRef && rangeRef.current) {
      rangeRef.current.style.background = newBackgroundStyle;
    }
  }

  return (
    <div className={styles.RangeSlider} >
      <input
        ref={rangeRef}
        className={styles.rangeInput}
        type='range' 
        onChange={handleChange(props.max)}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
      />
      <button onClick={props.onClick} className={styles.sliderBtn}>Использовать</button>
    </div>
  )
}

export default RangeSlider
// import { useRef, useState, useEffect } from 'react'

// function RangeSlider(props: {
//   min: number;
//   max: number;
//   step: number;
//   defaultLength: number;
//   value: number;
//   onChangeValue: (e: React.FormEvent<HTMLInputElement>) => void 
//   linearGradientColor: string;
//   rangeBackgroundColor: string;
//   sliderThumbColor: string;
// }) {
//     const rangeRef = useRef<HTMLInputElement>();
//     const [range, setRange] = useState<string | number>(props.defaultLength);

//     useEffect(() => {
//       if(rangeRef && rangeRef.current) {
//         const rangeValue = parseInt(rangeRef.current.value, 10);
//         rangeLinearGradient(rangeValue, props.min, props.max);
//       }
//         //eslint-disable-next-line
//     }, [rangeRef, props.min, props.max]);

//     const handleChange = (max: number, e: any) => {
//         props.onChangeValue(e);
//         setRange(e.target.value);

//         rangeLinearGradient(+e.target.value, props.min, max);
//     }

//     const calculatePercentage = (value: number, min: number, max: number) => {
//         return ((value - min) / (max - min)) * 100 + '%';
//     }

//     const rangeLinearGradient = (value: number, min: number, max: number) => {
//         const percentage = calculatePercentage(value, min, max);
//         const newBackgroundStyle = `linear-gradient(90deg, ${props.linearGradientColor} 0% ${percentage}, ${props.rangeBackgroundColor} ${percentage} 100%)`;
//         if(rangeRef && rangeRef.current) {
//         rangeRef.current.style.background = newBackgroundStyle;
//         }
//     }

//     return (
//         <>
//             <div className="slider-container">
//                 <input 
//                     ref={rangeRef}
//                     className={'sdf'}
//                     type="range"
//                     step={props.step}
//                     min={props.min}
//                     max={props.max}
//                     value={props.value}
//                     onChange={handleChange(props.max, e)}
//                 />
//                 <span className={`range-slider-value`}>{range}</span>
//                 <div className="range-min-max-values">
//                     <span>{props.min}</span><span>{props.max}</span>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RangeSlider

import { useRef, useState, useEffect } from 'react';
import styles from './RangeSlider.module.scss'


function RangeSlider(props: {
  min: number,
  max: number,
  step?: number;
  value: string | number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: () => void,
}) {
  const [active, setActive] = useState(false)
  

  return (
    <div className={styles.RangeSlider}>
      <div className={styles.sliderWrap}>
        <div className={styles.sliderTitle}>
          Оплата фанкоинами
        </div>
        <div className={styles.sliderMain} >
          <div className={styles.balance}>
            Баланс <span>{props.max} Б</span>
          </div>
          <div className={styles.total}>
            {active 
            ? `${props.value} Б`
            : <span onClick={() => setActive(true)} className={styles.sliderBtn}>Использовать</span>}
          </div>
        </div>
        {active
          ? <div className={styles.sliderChoice} >
              <input 
                className={styles.rangeInput}
                type='range' 
                onChange={props.onChange}
                min={props.min}
                max={props.max}
                value={props.value}
                step={props.step}
              />
              <span onClick={props.onClick} className={styles.sliderBtn}>Использовать</span>
            </div>
          : null}

      </div>
    </div>
  )
}

export default RangeSlider
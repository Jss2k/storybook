import { useRef, useState, useEffect} from 'react'

import styles from './Stepper2.module.scss'
import { ReactNodeArray } from 'react'

const Stepper2 = (props: { 
  steps: number,
   currentStep: number,
   setCurrentStep?: any,
  }) => {
  const [hoverStep, setHoverStep] = useState(0);

  let stepArray: number[] = []

    for (let i = 0; i < props.steps; i++ ) {
     stepArray.push(i)
    }

useEffect(() => {
  console.log('set', hoverStep)
}, [hoverStep])
  return (
    <div className={styles.progressBar}>

      {stepArray.map((step, i) => (
          <Step
            key={i}
            stepId={i}
            currentStep={hoverStep || props.currentStep}
            onMouseEnter={() => setHoverStep(i)}
            onMouseLeave={() => setHoverStep(0)}
            onClick={() => props.setCurrentStep(i)}
          />
        ))}

  </div>

  )
}

export default Stepper2

const Step = (props: {
  stepId: number,
  currentStep: number,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  onClick?: () => void
}) => {
  let styleClass = styles.step
  if (props.currentStep && props.currentStep >= props.stepId) {
    styleClass = [styles.step, styles.active].join(' ')
  }

  if (props.stepId === 0) {
    return (
      <div 
      className={[styles.step, styles.active].join(' ')}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
       <div className={styles.point}></div>
    </div>
    )
  } else {
    return (
      <div 
        className={styleClass}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
      >
        <div className={styles.progress}></div>
        <div className={styles.point}></div>
      </div>
    )
}
}

// export default Stepper2

// import { useRef } from 'react'

// import styles from './Stepper2.module.scss'
// import { ReactNodeArray } from 'react'

// const Stepper2 = (props: { steps: number, currentStep: number }) => {
//   const stepEl = useRef(null)

//   const ops = () => {
//     console.log(stepEl)
//   }

//   const stepList = (steps: number) => {
//     let stepArray: ReactNodeArray = []

//     for (let i = 1; i < steps; i++ ) {
//       props.currentStep >= i + 1 
//       ? stepArray.push(
//     <div key={i + 1} className={[styles.step, styles.active].join(' ')} ref={stepEl}>
//         <div className={styles.progress}></div>
//         <div className={styles.point} onClick={ops}></div>
//       </div>
//       )
//       : stepArray.push(
//     <div key={i + 1} className={styles.step} ref={stepEl}>
//         <div className={styles.progress}></div>
//         <div className={styles.point} onClick={ops}></div>
//       </div>
//       )
//     }
//     return stepArray
//   }

//   return (
//     <div className={styles.progressBar}>



//     {
//       stepList(props.steps)
//     }

//   </div>

//   )
// }

// const Star = () => {


//   return (
//     <div className={[styles.step, styles.active].join(' ')} ref={stepEl}>
//       <div className={styles.point}></div>
//     </div>
//   )
// }

// export default Stepper2
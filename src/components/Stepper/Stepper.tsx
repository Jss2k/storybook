import styles from './Stepper.module.scss'
import { ReactNodeArray } from 'react'

const Stepper = (props: { steps: number, currentStep: number }) => {

  const stepList = (steps: number) => {
    let stepArray: ReactNodeArray = []

    for (let i = 0; i < steps; i++ ) {

      props.currentStep >= i + 1 
      ? stepArray.push( <li key={i + 1} className={styles.active}></li>)
      : stepArray.push( <li key={i + 1}></li>)

    }
    return stepArray
  }
  return (
    <div className={styles.stepperWrap}>
      <ul className={styles.stepperBar}>
        {
          stepList(props.steps)
        }
      </ul>
    </div>

  )
}

export default Stepper
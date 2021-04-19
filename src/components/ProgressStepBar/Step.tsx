import styles from './ProgressStepBar.module.scss';

const Step = (props: {
  stepId: number,
  currentStep: number,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  onClick: () => void
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

export default Step
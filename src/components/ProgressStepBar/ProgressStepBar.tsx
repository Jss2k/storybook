import React, { useState } from 'react';
import Step from './Step';
import styles from './ProgressStepBar.module.scss';

const ProgressStepBar = (props: { steps: number; currentStep: number; setCurrentStep?: any }) => {
  const [hoverStep, setHoverStep] = useState(0);

  let stepArray: number[] = [];
  for (let i = 0; i < props.steps; i++) {
    stepArray.push(i);
  }

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
  );
};

export default ProgressStepBar;

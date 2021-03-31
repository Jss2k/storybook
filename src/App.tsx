import { useState } from 'react'
import Stepper from './components/Stepper/Stepper';

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="App">
      <div className='stepperWrap' style={{
        display: 'flex',
        width: '314px',
        flexWrap: 'nowrap',
        alignItems: 'center'

        }}>
        <button 
        style={{
          height: '40px',
          width: '130px'
        }}
          onClick={() => setCurrentStep(currentStep + 1)}
        />
      <Stepper
        currentStep={currentStep}
        steps={4}
      />
      </div>
    </div>
  );
}

export default App;

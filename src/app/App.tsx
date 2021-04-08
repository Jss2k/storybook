// import Logo from '../components/Logo/Logo';
import Stepper2 from './../components/Stepper2/Stepper2'
import './App.scss';
import styles from './App.module.scss';
import {Button} from './../components/Button/Button';
import { useState } from 'react'
import logo1 from './../testAssets/Group1.png'
import logo2 from './../testAssets/Group1810.png'
import shadow from './../testAssets/Ellipse170.png'
import lightEllipse from './../testAssets/lightEllipse.png';
import league from './../testAssets/league.png'
import stadium from './../testAssets/location.png'
import {ReactComponent as IconRight} from './../testAssets/iconRight.svg';
import {ReactComponent as IconLeft} from './../testAssets/iconLeft.svg';
import {ReactComponent as IconCalendar} from './../testAssets/iconCalendar.svg';
import {ReactComponent as Ellipse180} from './../testAssets/Ellipse180.svg';
import {ReactComponent as MiroodlesMono} from './../testAssets/MiroodlesMono.svg';
import CoutdownTimer from '../components/CoutdownTimer/CountdownTimer';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import Slider from '../components/Carousel/Carousel';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState<number | string>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };
  console.log(value)
  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', background:'#D5D5D5'}} >
      <div className={styles.wrap}>
        <header className={styles.header} >
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}> 
            <img src={logo1 } style={{height: '40px', width: '40px'}} alt=''/>
             </div>
            <div className={styles.itemsContainer}>
              <ul>
                <li></li>
                <li>Корзина</li>
                <li>Магазин</li>
                <li>Мои заказы</li>
              </ul>
            </div>
          </div>
        </header>
      
      <main className={styles.wrapper} style={{ width: '315px'}}>
        <RangeSlider 
          min={0}
          max={9999}
          step={1}
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <CoutdownTimer
          label={'бронь'}
          date={'April 8, 2021 01:50:00'}

        />

        <Slider />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.copyContainer}> © Какой-то там копирайт</div>
          <div className={styles.publicContainer}>оферты всякие</div>
        </div>
      </footer>
    </div>
  </div>

  );
}

export default App;
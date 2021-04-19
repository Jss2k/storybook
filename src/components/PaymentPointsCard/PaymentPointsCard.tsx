import { useState } from 'react';

import RangeSlider from '../RangeSlider/RangeSlider'

import { ReactComponent as IconQuestion } from 'assets/icons/icon_question.svg';

import styles from './PaymentPointsCard.module.scss';

function PaymentPointsCard(props: {
  min: number,
  max: number,
  step?: number,
  value: number,
  currency: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: () => void,
}) {
  const [active, setActive] = useState(false)
 
  return (
    <div className={styles.RangeSlider}>
      <div className={styles.sliderWrap}>
        <div className={styles.sliderTitle}>
          Оплата фанкоинами 
          <button className={styles.sliderBtn}><IconQuestion /></button>
        </div>
        <div className={styles.sliderMain} >
          <div className={styles.balance}>
            Баланс <span>{props.max} {props.currency.slice(0, 1)}</span>
          </div>
          <div className={styles.total}>
            {active 
            ? `${props.value} ${props.currency.slice(0, 1)}`
            : <button onClick={() => setActive(true)} className={styles.sliderBtn}>Использовать</button>}
          </div>
        </div>
        {active ? <RangeSlider {...props}/> : null}
      </div>
    </div>
  )
}

export default PaymentPointsCard
import { useState, useEffect } from 'react'

import {ReactComponent as StopWatch} from './stopwatch.svg';

import styles from './CountdownTimer.module.scss';

const CountdownTimer = (props: {
  label?: string,
  date: string,
}) => {
  const [timerDays, setTimerDays] = useState<string | number>('00')
  const [timerHours, setTimerHours] = useState<string | number>('00')
  const [timerMinutes, setTimerMinutes] = useState<string | number>('00')
  const [timerSeconds, setTimerSeconds] = useState<string | number>('00')
  
  let countdownDate = new Date(props.date).getTime()
  useEffect(() => {

      // ? new Date().getTime() + (props.minutes * 60 * 1000)
      // : new Date(props.date).getTime()
  
      let interval = setInterval(() => {
        let now = new Date().getTime()
        let distance = countdownDate - now
  
        let seconds = Math.floor(distance % (1000 * 60) / 1000)
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  
        let formatHours = hours < 10 ? `0${hours}` : hours
        let formatMinutes = minutes < 10 ? `0${minutes}` : minutes
        let formatSeconds = seconds < 10 ? `0${seconds}` : seconds
  
        if (distance < 0) {
          clearInterval(interval)
        } else {
          setTimerDays(days)
          setTimerHours(formatHours)
          setTimerMinutes(formatMinutes)
          setTimerSeconds(formatSeconds)
        }
      }, 1000)
  })

  return (
    <div id='CountdownTimer' className={styles.CountdownTimer} >
      <div className={styles.timerIcon}><StopWatch /></div>
      <div className={styles.timerLabel}><span>{props.label}</span></div>
      <div className={styles.timerWrap}>
        {timerDays > 0 
        ? <div className={styles.timerDays}>
          <span>{timerDays}</span>
          <span>дн</span>
        </div>
        : null }

        <div className={styles.timerTimeContainer}>
          {timerHours > 0
          ? <div className={styles.timerTime}>
            <p>{timerHours}</p>
            <p>:</p>
          </div>
          : null }
          <div className={styles.timerTime}>
            <p>{timerMinutes}</p>
            <p>:</p>
          </div>
          <div className={styles.timerTime}>
            <p>{timerSeconds}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CountdownTimer
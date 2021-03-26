import React, { useState } from 'react'
import Man from '../assets/man'
import styles from './ToggleSkin.module.scss'

export enum Skin {
  WHITE = 'white',
  DARK = 'dark',
}

const ToggleSkin: React.FC = ({ ...props}) => {
  const [currentSkin, setCurrentSkin] = useState(Skin.WHITE)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCurrentSkin(Skin.DARK) : setCurrentSkin(Skin.WHITE)
  }

  return (
    <>
        <label htmlFor={`${"toggle-theme-switch"}`}>
          <div className={styles.toggleContainer}>
            <div className={styles[`circle-${currentSkin}`]}>
            <input
              type='checkbox'
              id={`${'toggle-skin--switch'}`}
              onChange={handleChange}
            />
            </div>
          </div>
        </label>
          <div style={{
            fill: currentSkin === Skin.WHITE ? "white" : "black",
            stroke: 'black'
          }}>
            <Man/>
        </div>
    </>
  )
}

export default ToggleSkin
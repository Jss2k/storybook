import React from 'react'
import cn from 'classnames'

import styles from './SectorsGrid.module.scss'

type Spacing = 'sm' | 'md' | 'lg'

const SectorsGrid: React.FC<{ spacing?: Spacing  }> = ({ spacing }) => {
  const classNames = cn(styles.SectorsGrid, {
    [styles[`SectorsGrid_spacing_${spacing}`]]: spacing,
  })

  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div className={styles.SectorsGrid_item} key={number} />
      ))}
    </div>
  )
}

export default SectorsGrid
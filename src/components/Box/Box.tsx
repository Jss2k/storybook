import React from 'react'

import styles from './Box.module.scss'

const Box: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <div className={styles.Box}>{children}</div>
}

export default Box
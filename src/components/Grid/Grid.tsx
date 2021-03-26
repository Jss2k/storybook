import React from 'react'
import cn from 'classnames'

import styles from './Grid.module.scss'

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Spacing = 'sm' | 'md' | 'lg'

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
type AlignItems = 'flex-start' | 'flex-end' | 'center'

const Grid: React.FC<{
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;

}> = ({ children, container, item, xs, sm, md, lg, spacing, justifyContent, alignItems, ...props}) => {
  const classNames = cn ({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${xs}`]]: xs,
    [styles[`Grid_cols_${sm}`]]: sm,
    [styles[`Grid_cols_${md}`]]: md,
    [styles[`Grid_cols_${lg}`]]: lg,
    [styles[`Grid_spacing_${spacing}`]]: spacing,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
  })
  
  return <div className={classNames} { ...props}>{children}</div>
}

export default Grid
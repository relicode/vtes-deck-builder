import React from 'react'

import styles from './styles.css'


interface FilterButtonProps {
  onClick: Function,
  label: String,
  hoverLabel?: String,
}

const FilterButton = (props: FilterButtonProps) => (
  <div className={styles.filterButton}>
    <span className={styles.mainLabel}>{props.label}</span>
    <span className={styles.hoverLabel}>{props.hoverLabel ? props.hoverLabel : props.label}</span>
  </div>
)

export default FilterButton

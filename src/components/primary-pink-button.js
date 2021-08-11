import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-pink-button.module.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['buttonSmall']} ${projectStyles['thqButton']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton

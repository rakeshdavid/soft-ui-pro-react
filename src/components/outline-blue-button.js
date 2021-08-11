import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-blue-button.module.css'

const OutlineBlueButton = (props) => {
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

OutlineBlueButton.defaultProps = {
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlueButton

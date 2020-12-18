import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './.module.scss'

const Button = ({ label, onClick, styles, type }) => {
  return (
    <div
      className={classnames(css.wrapper, css[type])}
      onClick={onClick}
      style={styles}
    >
      {label}
    </div>
  )
}

Button.defaultProps = {
  styles: {},
  type: 'primary',
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.object,
  type: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button

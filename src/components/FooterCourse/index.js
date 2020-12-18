import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'

const FooterCourse = ({ styles }) => {
  return (
    <div className={css.wrapper} style={styles}>
      <div className={css.wrapper_left}>&copy; Refactory 2020</div>
      <div className={css.wrapper_right}>
        <a href="https://refactory.id/tos/">Terms of Services</a>
        <a href="https://refactory.id/privacy/">Privacy Policy</a>
      </div>
    </div>
  )
}

FooterCourse.defaultProps = {
  styles: {},
}

FooterCourse.propTypes = {
  styles: PropTypes.object,
}

export default FooterCourse

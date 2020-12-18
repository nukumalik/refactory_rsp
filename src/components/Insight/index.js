import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'

const Insight = ({ title, subtitle }) => {
  return (
    <div
      className={css.insight}
      style={{
        backgroundImage:
          'url(https://refactory.id/wp-content/uploads/2020/01/ripple-bg.png)',
      }}
    >
      <p>{title}</p>
      <h3>{subtitle}</h3>
    </div>
  )
}

Insight.defaultProps = {
  title: '',
  subtitle: '',
}

Insight.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Insight

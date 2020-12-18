import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'

const Materi = ({ title, items, styles }) => {
  return (
    <div className={css.wrapper} style={styles}>
      <div className={css.title}>{title}</div>
      {items?.length &&
        items?.map((item, index) => (
          <div
            className={css.item}
            key={index}
            onClick={() => (location.href = item?.url)}
          >
            <i className="fab fa-youtube"></i>
            <span>
              {item?.title} {`(${item['time-in']})`}
            </span>
            <div
              className={css.button}
              onClick={() => (location.href = item?.url)}
            >
              Start
            </div>
          </div>
        ))}
    </div>
  )
}

Materi.defaultProps = {
  title: '',
  items: [],
  styles: {},
}

Materi.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  styles: PropTypes.object,
}

export default Materi

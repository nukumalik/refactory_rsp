import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'

const CardCourse = ({ image, title, description, userImage, userName }) => {
  return (
    <div className={css.wrapper}>
      <div
        className={css.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className={css.user}>
        <div>
          <div
            className={css.user_image}
            style={{ backgroundImage: `url(${userImage})` }}
          ></div>
          <span>{userName}</span>
        </div>
      </div>
    </div>
  )
}

CardCourse.defaultProps = {
  description: '',
  image: '',
  title: '',
  userImage: '',
  userName: '',
}

CardCourse.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
}

export default CardCourse

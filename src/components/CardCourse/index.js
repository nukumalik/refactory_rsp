import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'

const CardCourse = ({
  image,
  title,
  description,
  userImage,
  userName,
  onClick,
}) => {
  return (
    <div className={css.wrapper} onClick={onClick}>
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
  onClick: () => {},
}

CardCourse.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
  onClick: PropTypes.func,
}

export default CardCourse

import React from 'react'
import PropTypes from 'prop-types'

import css from './.module.scss'
import { range } from '../../utils/common'

const CardReview = ({ image, name, status, stars, description }) => {
  return (
    <div className={css.card_review}>
      <div
        className={css.card_review_image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <h1>{name}</h1>
      <h3>{status}</h3>
      {stars && (
        <div className={css.card_review_stars}>
          {range(1, stars).map((star, index) => (
            <i className="fas fa-star m-1" key={index}></i>
          ))}
        </div>
      )}
      <strong>Recommeneded Bootcamp</strong>
      <p>{description}</p>
    </div>
  )
}

CardReview.defaultProps = {
  image: '',
  name: '',
  status: '',
  stars: 0,
  description: '',
}

CardReview.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  stars: PropTypes.number,
  description: PropTypes.string,
}

export default CardReview

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import css from './menulist.module.scss'

const MenuList = ({ title, menus }) => {
  return (
    <div className={css.menu_list}>
      <strong>{title}</strong>
      {menus.map((menu, index) => (
        <div key={`${menu}-${index}`}>
          {menu?.link?.includes('https') ? (
            <>
              <a href={menu?.link}>{menu?.label}</a>
              {menu?.pin && <span>{menu?.pin}</span>}
            </>
          ) : (
            <>
              <Link to={menu?.link}>{menu?.label}</Link>
              {menu?.pin && <span>{menu?.pin}</span>}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

MenuList.defaultProps = {
  menus: [],
}

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
  menus: PropTypes.array,
}

export default MenuList

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import css from './.module.scss'
import * as IMAGES from '../../config/images'
import { fetchPartner } from '../../store/Home/actions'

// Components
import { Button } from 'components'

const Header = ({ children, bgImage }) => {
  // States
  const [currentMenu, setCurrentMenu] = useState('/')
  const [menus, setMenus] = useState([
    { label: 'Home', path: '/', isActive: false },
    { label: 'Courses', path: '/courses', isActive: false },
    { label: 'Blog', path: '/blog', isActive: false },
  ])

  // Global Variable
  const dispatch = useDispatch()
  const { partner } = useSelector(state => state.Home)

  // Hooks
  useEffect(() => {
    dispatch(fetchPartner())
  }, [])

  useEffect(() => {
    setCurrentMenu(location.pathname)

    if (location?.pathname?.includes(currentMenu)) {
      setMenus(
        menus.map(menu =>
          menu?.path === currentMenu ? { ...menu, isActive: true } : menu
        )
      )
    }
  }, [location])

  return (
    <div
      className={css.wrapper}
      style={{
        backgroundImage: `url(${bgImage ? bgImage : IMAGES.HERO_HOMEPAGE})`,
      }}
    >
      <div
        className={css.overlay}
        style={{
          justifyContent: location.pathname === '/' ? 'space-between' : '',
        }}
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img alt="refactory" src={IMAGES.REFACTORY} />
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#NavbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="NavbarMenu">
              <ul className="navbar-nav ml-md-auto">
                {menus.map(menu => (
                  <li className="nav-item" key={menu?.label}>
                    <Link
                      to={menu?.path}
                      className={`nav-link ${menu?.isActive ? 'active' : ''}`}
                    >
                      {menu?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          {children}
          {location.pathname === '/' && (
            <div className={css.content}>
              <h1>
                Empowering <span>People</span> Through Programming
              </h1>
              <p>
                Refactory adalah perusahaan edukasi dan teknologi yang
                menyediakan layanan lengkap berupa course maupun custom training
                yang materinya dapat disesuaikan dengan kebutuhan teknologi dan
                bisnis perusahaan Anda.
              </p>
              <div className="d-flex">
                <Button label="Temukan Solusi Anda" onClick={() => {}} />
                <Button
                  label="tingkatkan Skill Anda"
                  onClick={() => {}}
                  type="secondary"
                />
              </div>
            </div>
          )}
        </div>

        {location.pathname === '/' && (
          <div className={css.partner}>
            <h3>PARTNER EKSKLUSIF KAMI</h3>
            <div className={css.partner_content}>
              <div className="container">
                <div
                  className={classnames(
                    'd-flex justify-content-center align-items-center'
                  )}
                >
                  {partner.length &&
                    partner.map(item => (
                      <img
                        alt={item?.name}
                        key={item?.id}
                        src={item?.photo_url}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Header.defaultProps = {
  bgImage: '',
  children: <div />,
}

Header.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.node,
}

export default Header

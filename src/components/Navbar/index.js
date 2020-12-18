import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import css from './.module.scss'
import * as IMAGES from '../../config/images'
import { Button } from '../'

const Navbar = () => {
  return (
    <nav
      className={classnames(
        'navbar navbar-expand-md navbar-light',
        css.wrapper
      )}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img alt="refactory" src={IMAGES.REFACTORY} />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggler="collapse"
          data-target="#NavbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="NavbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://enroll.refactory.id/roadmap"
                className="nav-link"
              >
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                <Button
                  label="Sign Up"
                  onClick={() => {}}
                  styles={{ padding: '3px 20px' }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

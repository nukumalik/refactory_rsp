import React from 'react'

import css from './.module.scss'
import { MenuList } from 'components'
import { companyMenus, connectMenus, sitemapMenus } from './utils'

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.top}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <MenuList title="Site Map" menus={sitemapMenus} />
            </div>
            <div className="col-md-2">
              <MenuList title="Company" menus={companyMenus} />
            </div>
            <div className="col-md-2">
              <MenuList title="Connect" menus={connectMenus} />
            </div>
            <div className="col-md-2 offset-md-1">
              <div className="d-flex align-items-centfer">
                <a
                  href="https://www.linkedin.com/school/13270470/"
                  target="__blank"
                  className={css.social_icon}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.facebook.com/refactory.id"
                  target="__blank"
                  className={css.social_icon}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/c/refactory"
                  target="__blank"
                  className={css.social_icon}
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/refactory.id/"
                  target="__blank"
                  className={css.social_icon}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <h5 className="mt-5">Company Address</h5>
              <div>Jln. Palagan Tentara Pelajar Km. 9,8</div>
              <div>Ngaglik, Kab. Sleman</div>
              <div>DI Yogyakarta 55581</div>
            </div>
            <div className="col-md-2">
              <h5 className="mt-5" style={{ paddingTop: 32 }}>
                Contact
              </h5>
              <div>
                <a href="mailto:marketing@refactory.id">
                  marketing@refactory.id
                </a>
              </div>
              <div>
                <a href="tel:+6281228203381">+6281228203381</a>
              </div>
              <br />
              <div>
                Dewita: <a href="https://wa.me/6285725827222">085725827222</a>
              </div>
              <div>
                Septin: <a href="https://wa.me/6285725827222">085725827222</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <div className="container">
          &copy; Refactory - All Rights Reserved -{' '}
          <a href="https://refactory.id/tos">Terms of Services</a> /{' '}
          <a href="https://refactory.id/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

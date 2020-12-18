import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import css from './.module.scss'
import * as IMAGES from '../../config/images'
import { fetchSeeOn } from '../../store/Home/actions'

// Components
import { Header, Footer, Insight } from 'components'

const Home = () => {
  // Global Variables
  const dispatch = useDispatch()
  const { seeOn } = useSelector(state => state.Home)

  useEffect(() => {
    dispatch(fetchSeeOn())
  }, [])

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className={css.help}>
          <h1>Apa Yang Refactory Datat Bantu</h1>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="col-12 col-md-6 mr-lg-3">
              <div className={css.card_help}>
                <img alt="approve" src={IMAGES.MATERIAL_APPROVAL} />
                <h3>Memperkuat Tim Engineer Anda</h3>
                <p>
                  Bisnis di jaman modern membutuhkan keterampilan pengembangan
                  terbaik untuk meningkatkan skala produk. Kami dapat
                  mempersiapkan course dan juga dapat menyediakan tim yang
                  menangani kebutuhan digital Anda.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 ml-lg-3">
              <div className={css.card_help}>
                <img alt="approve" src={IMAGES.MATERIAL_BOLT} />
                <h3>Wujudkan Software Impian Anda</h3>
                <p>
                  Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda,
                  membantu di setiap tahap mulai dari menyusun ide, melalui
                  desain dan pengembangan aplikasi seluler, situs web dan
                  aplikasi desktop, hingga peluncuran produk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Insight title="INSIGHT TERBARU" subtitle="Knowledge Sharing" />

      <div className="text-center pt-5 pb-5 mb-3">
        <Link to="/blog">
          Lihat Semua <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      <div className={css.see_on}>
        <div className="container">
          <h1>AS SEE ON</h1>
          <div className={css.see_on_content}>
            {seeOn.length &&
              seeOn.map(item =>
                item?.link_url?.includes('http') ? (
                  <a
                    href={item?.link_url || ''}
                    target="__blank"
                    key={item?.id}
                  >
                    <img alt={`seeon-${item?.name}`} src={item?.photo_url} />
                  </a>
                ) : (
                  <Link to={item?.link_url || ''} key={item?.id}>
                    <img alt={`seeon-${item?.name}`} src={item?.photo_url} />
                  </Link>
                )
              )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import css from './.module.scss'
import { Header, Button, Footer, CardReview } from '../../components'
import * as IMAGES from '../../config/images'
import { fetchData } from '../../store/Courses/actions'

const Course = () => {
  // Global variables
  const dispatch = useDispatch()
  const history = useHistory()
  const { data, isLoading } = useSelector(state => state.Courses)

  // Hooks
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div>
      <Header bgImage={IMAGES.HERO_COURSES}>
        <div className={css.content_wrapper}>
          <div className={css.content}>
            <h1>
              Tingkatkan <span>skill pemrograman</span> kapan pun, dimana pun.
            </h1>
            <p>
              We’re a brand of passionate software engineers and educators with
              an engaging curriculum backed by real-world software projects
              ready to boost your career.
            </p>
            <div className="d-flex">
              <Button
                label="Masuk & Mulai Belajar"
                onClick={() => history.push('/courses/list')}
              />
              <Button
                label="Daftar Sekarang"
                onClick={() =>
                  (location.href =
                    'https://enroll.refactory.id/?_ga=2.208342546.1265760339.1608116370-1857986742.1608116370')
                }
                type="secondary"
              />
            </div>
          </div>
        </div>
      </Header>
      <div className={css.course_advantage}>
        <div className="container">
          <div className={css.course_advantage_content}>
            <div>
              <h1>
                Bagaimana Refactory Course membantu{' '}
                <span>meningkatkan skill</span> anda.
              </h1>
              <Button
                label="Pelajari Lebih"
                onClick={() =>
                  (location.href =
                    'https://enroll.refactory.id/?_ga=2.208342546.1265760339.1608116370-1857986742.1608116370')
                }
              />
            </div>
            <img alt="advantage" src={IMAGES.COURSE_ADVANTAGE} />
          </div>
        </div>
      </div>

      <div className={css.description}>
        <div className="container">
          <div className={css.description_top}>
            <div className={css.description_top_left}>
              <h3>Kursus pemrograman untuk semua orang tanpa terkecuali</h3>
              <p>
                Refactory Course dirancang untuk memudahkan setiap orang mampu
                meningkatkan keahlian dalam software engineering tanpa dibatasi
                oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun
                usia.
              </p>
              <p>
                Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
                project, bagi pelajar/mahasiswa, Refactory Course akan
                melengkapi keahlian yang sudah diperoleh dalam studi sehingga
                dapat membuka kesempatan tak terbatas pada karir software
                engineering.
              </p>
              <p>
                Bagi karyawan atau tenaga profesional, Refactory Course dapat
                meningkatkan keahlian software engineer dalam menunjang
                menyelesaikan tugas pekerjaannya tanpa khawatir dengan
                keterbatasan waktu.
              </p>
              <p>
                Masyarakat secara luas juga dapat memanfaatkan pembelajaran
                untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat
                keuntungan karir tanpa khawatir mahalnya belajar.
              </p>
              <a href="https://enroll.refactory.id/?_ga=2.246015876.1265760339.1608116370-1857986742.1608116370">
                <Button
                  label="Daftar Sekarang"
                  onClick={() => {}}
                  styles={{ marginTop: '50px' }}
                ></Button>
              </a>
            </div>
            <div className={css.description_top_right}>
              <img alt="course-description" src={IMAGES.COURSE_DESCRIPTION} />
            </div>
          </div>
          <div className={css.description_bottom}>
            <h5>MEET OUR GRADUATES</h5>
            <h1>Review</h1>
            <h3>
              Read what our alumni said on <span>Course Report</span>
            </h3>
          </div>
        </div>
      </div>

      <div className={css.reviews_wrapper}>
        {isLoading && <h1>Loading...</h1>}
        {data.length &&
          data.map(item => (
            <CardReview
              image={item?.user?.photo_url}
              name={item?.user?.name}
              status={item?.user?.from}
              stars={item?.star}
              description={item?.description}
              key={item?.id}
            />
          ))}
      </div>
      <div className={css.ready}>
        <div className="mr-md-5">Ready to start Learning?</div>
        <a
          href="https://enroll.refactory.id/?_ga=2.207807378.1265760339.1608116370-1857986742.1608116370"
          target="__blank"
          className="ml-md-5"
        >
          <Button label="Daftar Sekarang" onClick={() => {}}></Button>
        </a>
      </div>
      <div className={css.course_step_wrapper}>
        <div className="container">
          <h5>LANGKAH MUDAH</h5>
          <h3>Memulai Belajar di Refactory Course</h3>
          <img alt="course-steps" src={IMAGES.COURSE_STEPS} />
          <a
            href="https://enroll.refactory.id/?_ga=2.146001844.1265760339.1608116370-1857986742.1608116370"
            target="__blank"
          >
            <Button
              label="Perlajari Lebih"
              onClick={() => {}}
              styles={{
                maxWidth: 'fit-content',
                padding: '8px 40px',
                margin: '0 auto',
              }}
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Course

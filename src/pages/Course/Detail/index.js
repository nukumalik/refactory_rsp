import React from 'react'
import { useSelector } from 'react-redux'

import css from './.module.scss'
import { Navbar, FooterCourse, Button, Materi } from '../../../components'

const CourseList = () => {
  // Global Variables
  const { detail, isLoading } = useSelector(state => state.Courses)

  return (
    <div className={css.wrapper}>
      <Navbar />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div
            className={css.header_wrapper}
            style={{ backgroundImage: `url(${detail['quistion-photo']})` }}
          >
            <div className={css.header_overlay}>
              <div className={css.header_content}>
                <h1>{detail['quistion']}</h1>
                <p>{detail['answer']}</p>
                <Button
                  label="Mulai Belajar"
                  onClick={() =>
                    (location.href =
                      detail['materi course'][0]['data'][0]['url'])
                  }
                  styles={{ padding: '15px 60px', borderRadius: '60px' }}
                />
              </div>
            </div>
          </div>

          <div className={css.about}>
            <h3>Tentang Course</h3>
            <p>{detail['short-description']}</p>
          </div>

          <div className={css.materi}>
            <h3>Materi Course</h3>
            {detail['materi course'].map((item, index) => (
              <Materi
                key={index}
                title={item?.section}
                items={item?.data}
                styles={{ marginBottom: '10px' }}
              />
            ))}
          </div>

          <div className={css.short_description}>
            <img alt="short_image" src={detail['quistion-photo']} />
            <div>
              <h1>{detail['quistion']}</h1>
              <p>{detail['answer']}</p>
            </div>
          </div>
        </>
      )}
      <FooterCourse />
    </div>
  )
}

export default CourseList

import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import css from './.module.scss'
import { Navbar, FooterCourse, CardCourse } from '../../../components'

const CourseList = () => {
  // Global Variables
  const { list } = useSelector(state => state.Courses)
  const history = useHistory()

  return (
    <div className={css.wrapper}>
      <Navbar />
      <div className={css.filter}>
        <div className={css.category}></div>
        <div className={css.search}></div>
      </div>
      <div className="container mt-5 mb-5">
        <div className={css.course_list}>
          {list?.map((item, index) => (
            <CardCourse
              key={index}
              image={item?.photo_url}
              title={item?.title}
              description={item?.short_description}
              userImage={item?.user?.photo_url}
              userName={item?.user?.name}
              onClick={() => history.push('/courses/detail')}
            />
          ))}
        </div>
      </div>
      <FooterCourse
      // styles={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
      />
    </div>
  )
}

export default CourseList

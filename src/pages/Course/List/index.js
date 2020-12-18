import React from 'react'
import { useSelector } from 'react-redux'

import css from './.module.scss'
import { Navbar, FooterCourse, CardCourse } from '../../../components'
import { fetchList } from '../../../store/Courses/actions'

const CourseList = () => {
  // Global Variables
  const { list, isLoading } = useSelector(state => state.Courses)

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

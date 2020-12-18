import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Suspense } from '../utils/lazy'

// Components
const Home = Suspense(React.lazy(() => import('./Home')))
const Courses = Suspense(React.lazy(() => import('./Course')))
const CourseList = Suspense(React.lazy(() => import('./Course/List')))
const CourseDetail = Suspense(React.lazy(() => import('./Course/Detail')))
const Login = Suspense(React.lazy(() => import('./Login')))

export default function Pages() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} exact />
      <Route path="/courses/list" component={CourseList} exact />
      <Route path="/courses/detail" component={CourseDetail} exact />
      <Route path="/login" component={Login} exact />
    </Switch>
  )
}

import React from 'react'
import { Suspense } from 'utils/lazy'

// Components
export const Footer = Suspense(React.lazy(() => import('./Footer')))
export const Header = Suspense(React.lazy(() => import('./Header')))
export const Button = Suspense(React.lazy(() => import('./Button')))
export const Insight = Suspense(React.lazy(() => import('./Insight')))
export const MenuList = Suspense(React.lazy(() => import('./MenuList')))
export const CardReview = Suspense(React.lazy(() => import('./CardReview')))
export const Navbar = Suspense(React.lazy(() => import('./Navbar')))
export const FooterCourse = Suspense(React.lazy(() => import('./FooterCourse')))
export const CardCourse = Suspense(React.lazy(() => import('./CardCourse')))

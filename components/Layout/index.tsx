import Footer from '@components/Footer/Footer'
import MainNav from '@components/MainNav'
import TopButton from '@components/TopButton/TopButton'
import { Box } from '@mui/material'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from './Layout.module.scss'

type ALLOWED_PATH =
  | '/product-search'
  | '/signin'
  | '/signup'
  | '/survey'
  | '/myaccount'
  | '/confirmpassword'
  | '/newpassword'
  | '/book'
  | '/saved'
  | '/mybooking'

const pageWithNavbar: ALLOWED_PATH[] = [
  '/product-search',
  '/signin',
  '/signup',
  '/survey',
  '/myaccount',
  '/confirmpassword',
  '/newpassword',
  '/book',
  '/saved',
  '/mybooking',
]

const pageWithoutPadding = ['/book', '/saved', '/mybooking']

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)
  const listExp: RegExp = new RegExp(`/product-list/\?(.*)`)
  const detailExp: RegExp = new RegExp(`/product-detail/\?(.*)`)
  const searchExp: RegExp = new RegExp(`/product-search/\?(.*)`)
  const myBookingDetailExp: RegExp = new RegExp(`/mybooking/\?(.*)`)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)
  }, [asPath, currentPath])

  const displayMainNav = () => {
    if (
      currentPath &&
      !pageWithNavbar.includes(currentPath) &&
      !searchExp.test(asPath) &&
      !myBookingDetailExp.test(asPath)
    ) {
      return <MainNav />
    }
  }

  const ApplyPadding = () => {
    if (
      currentPath &&
      !pageWithoutPadding.includes(currentPath) &&
      !myBookingDetailExp.test(asPath)
    ) {
      return true
    }
  }

  const displayTopButton = () => {
    if (
      asPath &&
      (asPath === '/' || listExp.test(asPath) || detailExp.test(asPath))
    ) {
      return <TopButton />
    }
  }

  const displayFooter = () => {
    if (
      asPath &&
      (asPath === '/' || listExp.test(asPath) || detailExp.test(asPath))
    ) {
      return <Footer />
    }
  }

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          minHeight: '100vh',
        }}
      >
        {displayMainNav()}
        {displayTopButton()}
        <Box
          className={
            ApplyPadding()
              ? style['children-container-with-padding']
              : style['children-container-without-padding']
          }
        >
          {children}
        </Box>
        {displayFooter()}
      </Container>
    </>
  )
}

export default Layout

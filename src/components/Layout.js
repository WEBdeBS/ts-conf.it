import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './../sass/style.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="it" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
        <link rel="stylesheet" href="/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/jquery-ui.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="/css/aos.css" />



      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

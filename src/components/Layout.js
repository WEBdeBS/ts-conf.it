import React, { useState } from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { withPrefix } from 'gatsby'
import './../sass/style.scss'
import useSiteMetadata from './SiteMetadata'
import { CookieBanner } from '@palmabit/react-cookie-law';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [acceptedStatistics, setAcceptedStatistics] = useState(false);

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

        {acceptedStatistics &&
          <script type="text/javascript" async defer src={withPrefix('/js/statistics-scripts.js')}></script>
        }
      </Helmet>
      <div>{children}</div>
      <Footer />


      <CookieBanner
        message="This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies."
        acceptButtonText="Consent"
        necessaryOptionText='Required / Tech'
        statisticsOptionText='Analytics'
        showMarketingOption={false}
        privacyPolicyLinkText='Privacy and Cookie policy'
        policyLink='/privacy'
        showPreferencesOption={false}
        onAccept={() => { }}
        onAcceptPreferences={() => { acceptedStatistics !== true && setAcceptedStatistics(true) }}
        onAcceptStatistics={() => { }}
        styles={{
          dialog: {
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: '100000',
            backgroundColor: '#f8f7f7',
            padding: '10px',
          }
        }}
      />

      {/*<script src={withPrefix('/js/jquery-3.3.1.min.js')} />
      <script src={withPrefix('/js/main.js')} />
      <script type="text/javascript">alert("ciao");</script>
      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="/js/jquery-migrate-3.0.1.min.js"></script>
      <script src="/js/jquery-ui.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/jquery.stellar.min.js"></script>
      <script src="/js/jquery.countdown.min.js"></script>
      <script src="/js/jquery.magnific-popup.min.js"></script>
      <script src="/js/bootstrap-datepicker.min.js"></script>
      <script src="/js/aos.js"></script> */}

    </div>
  )
}

export default TemplateWrapper

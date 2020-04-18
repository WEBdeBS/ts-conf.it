import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import CallForPaper from '../components/CallForPaper'
import Tickets from '../components/Tickets'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
// import News from '../components/News'
import MediaPartner from '../components/MediaPartner'
import Map from '../components/Map'
import CodeOfConduct from '../components/CodeOfConduct'

// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import Newsletter from '../components/Newsletter';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Header></Header>
    <Hero></Hero>
    <Speakers></Speakers>
    <Schedule></Schedule>
    <Tickets></Tickets>
    <Sponsors></Sponsors>
    <Newsletter></Newsletter>
    <MediaPartner></MediaPartner>
    <CodeOfConduct></CodeOfConduct>
    <Map></Map>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`

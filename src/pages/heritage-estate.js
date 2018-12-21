import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HeritageEstatePage = () => (
  <Layout>
    <SEO title="Heritage Estate" />
    <h1>Hi from the Heritage Estate page</h1>
    <p>Welcome to page 9</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HeritageEstatePage

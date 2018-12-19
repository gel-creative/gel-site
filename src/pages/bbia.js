import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BbiaPage = () => (
  <Layout>
    <SEO title="BBIA | Gel Creative" />
    <h1>Hi from the BBIA page</h1>
    <p>Welcome to page 8</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BbiaPage

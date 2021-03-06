import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const KenmorePage = () => (
  <Layout>
    <SEO title="Kenmore | Gel Creative" />
    <h1>Hi from the Kenmore page</h1>
    <p>Welcome to page 5</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default KenmorePage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio | Gel Creative" />
    <h1>Hi from the Portfolio page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage

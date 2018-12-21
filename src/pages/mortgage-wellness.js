import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MortgageWellnessPage = () => (
  <Layout>
    <SEO title="Mortgage Wellness | Gel Creative" />
    <h1>Hi from the Mortgage Wellness page</h1>
    <p>Welcome to page 6</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MortgageWellnessPage

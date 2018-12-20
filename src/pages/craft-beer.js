import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const CraftBeerPage = () => (
  <Layout>
    <SEO title="Craft Beer" />
    <h1>Hi from the Craft Beer page</h1>
    <p>Welcome to page 7</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CraftBeerPage

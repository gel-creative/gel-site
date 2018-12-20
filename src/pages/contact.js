import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <ul>
      <li><Link to="/about/">Go to About Page</Link></li>
      <li><Link to="/contact/">Go to Contact Page</Link></li>
      <li><Link to="/portfolio/">Go to portfolio Page</Link></li>
      <li><Link to="/bbia/">Go to bbia Page</Link></li>
      <li><Link to="/craft-beer/">Go to craft-beer Page</Link></li>
      <li><Link to="/heritage-estate/">Go to heritage-estate Page</Link></li>
      <li><Link to="/kenmore/">Go to kenmore Page</Link></li>
      <li><Link to="/mortgage-wellness/">Go to mortgage-wellness Page</Link></li>
    </ul>
  </Layout>
)

export default IndexPage

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ClickSpark from '../../usages/ClickSpark'
import {Helmet} from 'react-helmet'

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>

      <ClickSpark
         sparkColor='gold'
         sparkSize={15}
         sparkRadius={20}
         sparkCount={10}
         duration={400}
      >
        <Header />
        {children}
        <Footer />
      </ClickSpark>
    </div>
  )
}

Layout.defaultProps = {
  title: "ND Gardens",
  description: "ND Gardens is a beautiful place for all your events and functions. We have a large hall for all your functions and events. We also have a beautiful garden for your outdoor events.",
  keywords: "ND Gardens, ND Gardens Hall, ND Gardens Garden, ND Gardens Events, ND Gardens Functions, Marriage Hall, Party Hall, Birthday Hall, Wedding Hall, Reception Hall, ND Gardens Reception, ND Gardens Wedding, ND Gardens Birthday, ND Gardens Party",
  author: "Nirmala Devi Functional Halls"
}

export default Layout
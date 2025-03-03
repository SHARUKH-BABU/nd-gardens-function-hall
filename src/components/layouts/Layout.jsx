import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ClickSpark from '../../usages/ClickSpark'

const Layout = ({children}) => {
  return (
    <div>
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

export default Layout
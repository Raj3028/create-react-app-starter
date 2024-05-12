import React from 'react'
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div className='sticky top-0 w-full'>
        <Header />
      </div>

      <div className='p-3'>
        {children}
      </div>

      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
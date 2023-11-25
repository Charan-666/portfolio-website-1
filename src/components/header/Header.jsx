import React from 'react'
import './Header.css'
import CTA from './CTA'
import New from '../../assets/New.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>

      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>G CHARAN</h1>
        <h5 className='text-light'>   CSE UG  STUDENT</h5>
      </div>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={New} alt='New'></img>
      </div>
      <a href='#contact' className='scroll__down'>S<br/>C<br/>R<br/>O<br/>O<br/>L<br/></a>

    </header>
  )
}

export default Header
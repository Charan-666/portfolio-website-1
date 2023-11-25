/*rafce*/
import React from 'react'
import CHARAN from '../../assets/CHARAN.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CHARAN} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
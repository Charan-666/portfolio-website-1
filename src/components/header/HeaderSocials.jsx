import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import {FaPodcast} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a rel='noreferrer'   href='https://www.linkedin.com/in/g-charan-b502a2253' target='_blank'><BsLinkedin size={25}/></a>
        <a rel='noreferrer' href='https://github.com/Charan-666' target='_blank'><BsGithub size={25}/></a>
        <a rel='noreferrer'  href='https://spotify.link/hUCqSUziODb' target='_blank'><FaPodcast size={25}/></a>
    </div>
  )
}

export default HeaderSocials
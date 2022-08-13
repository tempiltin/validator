import React from 'react'
import Iframe from 'react-iframe'
const URI = 'https://playcode.io/javascript/'
const Java_Script_page = () => {
  return (
    <Iframe className='Iframe' src={URI} frameborder="0" />
  )
}

export default Java_Script_page
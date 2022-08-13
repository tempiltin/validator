import React from 'react'
import Iframe from 'react-iframe'
const URI = 'https://dartpad.dev'
const Flutter_page = () => {
  return (
    <Iframe className='Iframe' src={URI} frameborder="0" />
  )
}

export default Flutter_page
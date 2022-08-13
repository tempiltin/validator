import React from 'react'
import Iframe from 'react-iframe'
const URI = 'https://www.online-python.com/'
const Python_page = () => {
  return (
    <>
  <Iframe  className='Iframe' src={URI} frameborder="0" />
    </>
  )
}

export default Python_page
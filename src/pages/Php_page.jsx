import React from 'react'
import Iframe from 'react-iframe'
const URI = 'https://www.jdoodle.com/php-online-editor/'
const Php_page = () => {
  return (
<Iframe  className='Iframe' src={URI} frameborder="0" />
  )
}

export default Php_page
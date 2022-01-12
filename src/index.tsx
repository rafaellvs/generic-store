import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import Router from 'src/components/Router'
import GlobalStyles from 'src/helpers/global-styles'

WebFont.load({
  google: {
    families: ['Montserrat:300,500,700,800']
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

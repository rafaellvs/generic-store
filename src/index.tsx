import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import App from 'src/components/App'

WebFont.load({
  google: {
    families: ['Montserrat:300,500,700,800']
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

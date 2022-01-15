import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from 'src/pages/Home'
import Store from 'src/pages/Store'
import Cart from 'src/pages/Cart'
import NotFound from 'src/pages/NotFound'

const Router = () => {
  const location = useLocation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'src/components/Layout'

import Home from 'src/pages/Home'
import NotFound from 'src/pages/NotFound'

const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default Router

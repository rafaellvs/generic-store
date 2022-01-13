import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from 'src/components/Layout'

import Home from 'src/pages/Home'
import ShoppingList from 'src/pages/ShoppingList'
import NotFound from 'src/pages/NotFound'

const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default Router

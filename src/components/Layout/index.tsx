import React from 'react'

import Header from 'src/components/Header'

import { Container, MainContent } from './styled'

type LayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />

      <MainContent>
        {children}
      </MainContent>
    </Container>
  )
}

export default Layout

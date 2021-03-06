import React from 'react'

import Text from 'src/components/core/Text'
import Link from 'src/components/core/Link'

import { Container } from './styled'

const Home = () => {
  return (
    <Container>
      <Text type='h1'>
        Welcome to the Generic Store page!
      </Text>
      <Text type='p' padding='16px 0'>
        Here you will find the most amazing products! Happy shopping!
      </Text>

      <Link to='/store'>Go to our store</Link>
    </Container>
  )
}

export default Home

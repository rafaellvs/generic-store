import React from 'react'

import Link from 'src/components/core/Link'
import Text from 'src/components/core/Text'

import { Container } from './styled'

const NotFound = () => {
  return (
    <Container>
      <Text type='h1' padding='0 0 16px 0'>
        {'Sorry! We couldn\'t find the page you were looking for.'}
      </Text>
      <Link href='/'>Back to home</Link>
    </Container>
  )
}

export default NotFound

import React from 'react'

import Text from 'src/components/core/Text'

import { Container } from './styled'

const Error = () => {
  return (
    <Container>
      <Text type='h2'>Ooops! An error occured while trying to fetch the data you requested...</Text>
      <Text type='p' padding='10px 0 0 0'>
        Please, try again later!
      </Text>
    </Container>
  )
}

export default Error

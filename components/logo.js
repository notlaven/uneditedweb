import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Noto Sans, sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Unedited
        </Text>
      </LogoBox>
    </Link>)
  );
}

export default Logo
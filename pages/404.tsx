import NextLink from "next/link"
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" fontFamily="" mt={6} mb={3}>
        404 - Where has it gone?
      </Heading>
      <Text>
        This page could not be found - If you think it is not supposed to be
        like this, code your own website. Or contact me on discord: notlaven
      </Text>
      <Divider my={6} />

      <Box my={6} alignItems="center">
        <NextLink href="/">
          <Button colorScheme="yellow">Back to the homepage</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound

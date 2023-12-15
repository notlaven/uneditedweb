import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/blogs">
      <Link fontSize={14} fontFamily={"Work Sans, sans-serif"} textColor={"yellow.500"} fontWeight={"bold"}>Blogs</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={14} mb={4} mt={3} fontFamily={"Work sans, sans-serif"}>
      {children}
    </Heading>
  </Box>
)

export const BlogsImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="yellow" mr={2} display="inline-block">
    {children}
  </Badge>
)
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/blog"

const About = () => {
  return (
    <Layout>
      <Container>
        <Heading
          as="h3"
          fontSize={24}
          mt={5}
          mb={4}
          fontFamily="Work Sans, sans-serif"
        >
          About me
        </Heading>
      </Container>
    </Layout>
  )
}

export default About

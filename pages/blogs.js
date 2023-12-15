import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { BlogsGridItem } from "../components/grid-i"
import Layout from "../components/layouts/blog"

import christmasBlogThumbnail from "../christmasblog.png"

const Blog = () => {
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
          Blogs
        </Heading>

        <Section delay={.3}>
          <BlogsGridItem id="christmasBlog" title="Christmas blog - Dev blog 1" thumbnail={christmasBlogThumbnail}>
            
          </BlogsGridItem>
        </Section>
      </Container>
    </Layout>
  )
}

export default Blog

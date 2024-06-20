import { Container, Heading } from "@chakra-ui/react"
import Section from "../components/section"
import { BlogsGridItem } from "../components/grid-i"
import Layout from "../components/layouts/blog"

import christmasBlogThumbnail from "../components/images/blogs/christmasblog.png"

const Blog = () => {
  return (
    <Layout title="Overview">
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

        <Section delay={0.3}>
          <BlogsGridItem
            id="christmasBlog"
            title="Christmas blog - Dev blog 1"
            thumbnail={christmasBlogThumbnail}
          >Christmas blog</BlogsGridItem>
        </Section>
      </Container>
    </Layout>
  )
}

export default Blog

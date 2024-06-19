import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Text
} from "@chakra-ui/react";
import { BlogsTitle, Meta } from "../../components/blog";
import Layout from "../../components/layouts/blog";

const Blog = () => {
  return (
    <Layout title="Christmas blog - Dev blog 1">
      <Container>
        <BlogsTitle>Christmas blog</BlogsTitle>

        <Heading
          as="h2"
          fontSize={24}
          fontFamily="Work Sans, sans-serif"
          fontWeight="bold"
        >
          Christmas blog - Dev blog #1 <Badge>Dec 2023</Badge>
        </Heading>
        <List>
          <ListItem fontFamily={"Work sans, sans-serif"}>
            <Meta>Blogpost</Meta><span>Dev blog - christmas special</span>
          </ListItem>
        </List>

        <Text fontSize={14} mt={3}>
          Welcome to the first dev blog!!
        </Text>
      </Container>
    </Layout>
  );
};

export default Blog;

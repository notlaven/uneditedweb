import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Text
  } from "@chakra-ui/react";
  import { ExternalLinkIcon } from "@chakra-ui/icons";
  import { Title, Meta } from "../../components/blog";
  import Layout from "../../components/layouts/project";
  
  const Project = () => {
    return (
      <Layout Title="Website Laurens Waling">
        <Container>
          <Title>Website Laurens Waling</Title>
  
          <Heading
            as="h2"
            fontSize={24}
            fontFamily="Work Sans, sans-serif"
            fontWeight="bold"
          >
            Website Laurens Waling
          </Heading>
          <List ml={4} my={4} fontSize={13}>
            <ListItem fontFamily={"Work sans, sans-serif"} mb={1}>
              <Meta>Project</Meta><span>Website</span>
            </ListItem>
            <ListItem fontFamily={"Work sans, sans-serif"} mb={1}>
              <Meta>Link</Meta><Link href="https://www.laurenswaling.com/">https://www.laurenswaling.com/ <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
          </List>
  
          <Text fontSize={14} mt={3}>
            Laurens Waling
          </Text>
        </Container>
      </Layout>
    );
  };
  
  export default Project;
  
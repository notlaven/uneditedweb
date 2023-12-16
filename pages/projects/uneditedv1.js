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
      <Layout title="Unedited v1.0">
        <Container>
          <Title>Unedited v1.0</Title>
  
          <Heading
            as="h2"
            fontSize={24}
            fontFamily="Work Sans, sans-serif"
            fontWeight="bold"
          >
            Unedited v1.0
          </Heading>
          <List ml={4} my={4} fontSize={13}>
            <ListItem fontFamily={"Work sans, sans-serif"} mb={1}>
              <Meta>Project</Meta><span>Website</span>
            </ListItem>
            <ListItem fontFamily={"Work sans, sans-serif"} mb={1}>
              <Meta>Link</Meta><Link href="https://preview.webflow.com/preview/unedited?utm_medium=preview_link&utm_source=designer&utm_content=unedited&preview=5386da9674e380e5c179022063145489&workflow=preview">Unedited v1.0 - Created with webflow <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
          </List>
  
          <Text fontSize={14} mt={3}>
            Unedited v1.0
          </Text>
        </Container>
      </Layout>
    );
  };
  
  export default Project;
  
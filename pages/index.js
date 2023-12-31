import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/blog";
import Section from "../components/section";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bgColor={"whiteAlpha.300"}
          p={3}
          mb={6}
          mt={3}
          align="center"
        >
          Hello, I'm Charlie!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading
              as="h1"
              variant="page-title"
              fontFamily="Noto Sans, sans-serif"
            >
              Charlie
            </Heading>
            <p>Full-stack website & swift developer</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            mt={5}
            fontFamily="Work Sans, sans-serif"
          >
            About
          </Heading>

          <p>
            Hi! I'm Charlie, coding and website design are my way of creating a
            good place in the world. When I was 5 years old, I started learning
            the basics of coding; in python. And ever since, I've started coding
            and creating websites and apps. Learning over 15 different
            programming languages, and writing over 10000 lines of code.
          </p>
          
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/about"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="yellow"
            >
              About me
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            mt={3}
            fontFamily="Work Sans, sans-serif"
          >
            Projects
          </Heading>

          <p>
            Since December 2023 I've been working to create stunning new designs and code
            for new apps and websites.
          </p>

          <p>
            Since then I've created several projects.
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="yellow"
            >
              Projects
            </Button>
          </Box>
        </Section>

        
      </Container>
    </Layout>
  );
};

export default Page;

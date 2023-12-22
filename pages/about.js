import { Container, Heading, SimpleGrid, Divider, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/blog"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { IoLogoGithub, IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io5"

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
        <Divider mb={5} mt={3}/>
        <p>
          Hello, I'm Charlie. <br />
          <br />
          I'm a 14 year old full stack web developer. I've been creating
          websites, apps and custom built software solutions since 5, expanding
          my knowledge of code and design over time. <br />
          I've been reaching certificates from IBM (Via EDx) to reach a
          MicroBachelors in full-stack application development. (For more info
          visit{" "}
          <Link
            color="yellow.500"
            href={
              "https://www.linkedin.com/in/tjalling-van-abbema-8430811a8/details/certifications/"
            }
          >
            my LinkedIn <ExternalLinkIcon />
          </Link>
          ) <br />
          <br />
          Links: <br />
        </p>
        <Link
          target="_blank"
          href="https://github.com/FearlessTJ/uneditedweb"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          color={"whiteAlpha"}
        >
          <IoLogoGithub /> Github (Source code website)
        </Link>
        <br />
        <Link
          target="_blank"
          href="https://wa.me/31614102758"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          color={"green.500"}
        >
          <IoLogoWhatsapp /> WhatsApp
        </Link>
        <br />
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tjalling-van-abbema-8430811a8/"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          color={"blue.500"}
        >
          <IoLogoLinkedin /> LinkedIn
        </Link>
      </Container>
    </Layout>
  )
}

export default About

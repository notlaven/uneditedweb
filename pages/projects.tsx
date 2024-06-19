import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { ProjectGridItem } from "../components/grid-i"

import thumbLaurens from "../components/images/projects/thumbnailLaurens.png"
import thumbUnedited from "../components/images/projects/thumbnailUnedited.png"

const projects = () => {
  return (
    <Container>
      <Heading
        as="h3"
        fontSize={24}
        mt={2}
        mb={3}
        fontFamily="Work Sans, sans-serif"
      >
        Projects
      </Heading>

      <Section delay={0.2}>
        <Divider my={6}/>
        <Heading
          as="h3"
          fontSize={24}
          mt={5}
          mb={4}
          fontFamily="Work Sans, sans-serif"
        >
          Websites
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem
            id="laurens"
            title="Laurens Waling"
            thumbnail={thumbLaurens}
          >
            Website of Laurens Waling
          </ProjectGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectGridItem
            id="uneditedv1"
            title="Unedited v1.0"
            thumbnail={thumbUnedited}
          >
            The first version of the Unedited Website
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading
          as="h3"
          fontSize={24}
          mt={5}
          mb={4}
          fontFamily="Work Sans, sans-serif"
        >
          Apps
        </Heading>
      </Section>
    </Container>
  )
}

export default projects

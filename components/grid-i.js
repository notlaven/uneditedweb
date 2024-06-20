import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem =({ href, title, thumbnail }) => (
    <Box 
        w="100%" 
        align="center"
    >
        <LinkBox cursor="pointer">
            <Image 
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ProjectGridItem =({ children, id, title, thumbnail }) => (
    <Box w="100%" h="100%" align="center">
        <NextLink href={`/projects/${id}`}>
            <LinkBox cursor="pointer">
                <Image height="203" src={thumbnail} alt={title} className="grid-item-thumbnail"
                    placeholder="blur"/>

                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14} fontFamily={"Work Sans, sans-serif"}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const BlogsGridItem =({ id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/blogs/${id}`}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail"
                    placeholder="blur"/>

                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={20} fontFamily="Work Sans, sans-serif">
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14} fontFamily={"Work Sans, sans-serif"}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const ProjectItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)
import React from 'react'
import { Heading, Image, Button,Box,  Text, Stack, Flex, Divider, CardFooter, Card, CardBody, Spacer, Link } from '@chakra-ui/react'


const SingleNewsItem = ({news}) => {
  return (
    <>
        <Card maxW='sm' h='500px' bg='gray.100' m='2px'>
            <CardBody>
                <Image
                src={news.urlToImage || "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                w='sm'
                h='200px'
                objectFit='cover'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{news.title.slice(0, 50)}...</Heading>
                <Text>
                    {news.description && news.description.slice(0, 150)}...
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>

                <Flex justifyContent='center' alignItems='center'>
                    <Box>
                        <Text fontSize='sm'>
                            By:- {(news.author && news.author.slice(0, 20)) || "Unknown Source"}
                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button ml='10px' variant='ghost' colorScheme='blue'>
                            <Link href={news.url} target='/blank'>
                                Read More 
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </CardFooter>
        </Card>
    </>
  )
}

export default SingleNewsItem
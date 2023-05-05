import React from 'react'
import { Box, Flex, Image, Spacer, InputGroup, Input, InputRightElement, Button, Text } from '@chakra-ui/react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const Navbar = () => {

    const handleSearchClick = () => {

    }

  return (
    <>
        <Flex justifyContent='center' alignItems='center' bgColor='gray.100'>
            <Box cursor='pointer' onClick={() => window.location.reload()}>
                <Flex justifyContent='center' alignItems='center'>
                    <Image pl='20px' boxSize='100px' src='https://www.svgrepo.com/show/289173/monkey.svg' />
                    <Text pl='20px' fontSize='2xl'>NewsMonkey</Text>
                </Flex>
            </Box>
            <Spacer />
            <InputGroup size='md' w='600px'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Search for the latest news...'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleSearchClick}>
                    Search
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Spacer />
            <FilterAltIcon fontSize='large'/>
            <Text>Filter</Text>
            <Spacer />
        </Flex>
    </>
  )
}

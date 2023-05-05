import { ChakraProvider, Box } from '@chakra-ui/react'
import { Homepage } from './components/Homepage';

function App() {
  return (
      <ChakraProvider>
          <Box bgColor='gray.100' h='100vh'>
            <Homepage /> 
          </Box>
      </ChakraProvider>
  );
}

export default App;

import React from 'react';
import './Qlysanpham.css';
import { ChakraProvider,Box } from '@chakra-ui/react';
import ListProductAdmin from '../ListProductAdmin';

function Qlysanpham() {
  return (
    <>    
        <Box className="main-container">
            <ChakraProvider>
              <ListProductAdmin />
            </ChakraProvider>
        </Box>
    </>
  )
}

export default Qlysanpham
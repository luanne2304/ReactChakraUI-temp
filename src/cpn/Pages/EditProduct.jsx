import React from 'react';
import './Qlysanpham.css';
import { ChakraProvider,Box } from '@chakra-ui/react';
import FormCRUDProduct from '../FormCRUDProduct';

function EditProduct() {
  return (
    <>    
        <Box className="main-container">
            <ChakraProvider>
              <FormCRUDProduct />
            </ChakraProvider>
        </Box>
    </>
  )
}

export default EditProduct
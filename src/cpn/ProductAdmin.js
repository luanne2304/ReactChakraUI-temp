import React from 'react';
import {  Image ,Tr, Td} from '@chakra-ui/react';

const Product = ({ product }) => {
  return (
    <Tr
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      align="center"
    >
      <Td>
      <Image src={product.image} alt={product.name} mr={4} />
      </Td>
        <Td fontSize="xl" fontWeight="bold" mb={2}>
          {product.name}
        </Td>
        <Td fontSize="lg" mb={2}>
          {product.price}
        </Td>
        <Td fontSize="sm" color="gray.500">
          {product.createdAt}
        </Td>
        <Td fontSize="sm" color="gray.500">
         {product.updatedAt}
        </Td>
        <Td>
          <i class="fa-solid fa-pencil"></i>
        </Td>
    </Tr>
  );
};

export default Product;
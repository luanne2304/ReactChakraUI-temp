import React from 'react';
import {Icon , Input,Container, Flex, Heading, Table, Thead, Tbody, Tr, Th ,Button } from '@chakra-ui/react';
import { DeleteIcon , SmallAddIcon } from '@chakra-ui/icons';
import Product from './ProductAdmin';
import products from '../API/products';


function ListProductAdmin() {
  return (
    <Container maxW="100%" mt={8}>
      <Heading as="h1" mb={4} class="d-flex justify-content-center">
        Quản Lý Sản Phẩm
      </Heading>
      <Flex justify="space-between" w="100%">
      <Flex align="center">
        <Input bgColor="white" w="300px" placeholder="Tìm sản phẩm..." />
        <Button>
          <i className="fa-solid fa-magnifying-glass fa-sm"></i>
        </Button>
      </Flex>
      <Flex>
        <Button w="150px">
          <Icon as={DeleteIcon} boxSize={8} color="red.600" />
        </Button>
        <Button bgColor="whatsapp.300" w="150px">
          <Icon as={SmallAddIcon} boxSize={8} color="teal.500" />
        </Button>
      </Flex>
    </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ảnh</Th>
            <Th>Tên sản phẩm <i class="fa-solid fa-filter"></i></Th>
            <Th>Giá <i class="fa-solid fa-filter"></i></Th>
            <Th>Ngày tạo <i class="fa-solid fa-filter"></i></Th>
            <Th>Ngày cập nhật <i class="fa-solid fa-filter"></i></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ListProductAdmin;
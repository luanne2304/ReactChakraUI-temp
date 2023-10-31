import React from 'react'
import {  Input, Button, Textarea, Flex, Heading } from '@chakra-ui/react';



function FormCRUDProduct() {
  return (
    <Flex flexDirection="column" p={4}>
      <Heading class="d-flex justify-content-center" as="h2" mb={4}>Chỉnh Sửa Sản Phẩm</Heading>
      <Input
        w="500px"
        name="name"
        placeholder="Tên sản phẩm"
        background="white"
        mb={4}
        mt={6}
      />
      <Input
        type="file"
        w="500px"
        name="image"
        background="white"
        accept="image/*"
        mb={4}
        mt={2}
      />
      <Input
        name="price"
        w="500px"
        type="number"
        placeholder="Giá sản phẩm"
        background="white"
        mb={4}
        mt={2}
      />
      <Input
        type=""
        name="title"
        w="500px"
        placeholder="Tiêu đề"
        background="white"
        mb={4}
        mt={2}
      />
      <Textarea
        name="description"
        placeholder="Mô tả"
        background="white"
        mb={4}
        mt={2}
      />
      <Flex justify="flex-end">
        <Button colorScheme="red" mr={2}>
            Xóa sản phẩm
        </Button>
        <Button colorScheme="teal">
          Lưu
        </Button>
      </Flex>
    </Flex>
  )
};


export default FormCRUDProduct
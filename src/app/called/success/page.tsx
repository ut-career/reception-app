"use client";
import { Box, Text } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaCheck } from "react-icons/fa";

const ResultComponent = () => {
  const router = useRouter()
  useEffect (() => {
    setTimeout(()=>router.push('/'),10000)
  })
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width='80%'
      p={4}
      borderRadius='10px'
    > 
      <Box
      bgColor='green'
      borderRadius='50%'
      padding={50}
      >
        <FaCheck color="white" size={300} />
      </Box>
    
      <Text
        fontSize="xx-large"
        fontWeight="bold"
        color='white'
       > 
       呼出に成功しました。
      </Text>  
      <Text
        fontSize="x-large"
        fontWeight="bold"
        color='white'
       > 
       担当者が間もなく伺います。
      </Text>  
    </Box>
  );
};

export default ResultComponent;
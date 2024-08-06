"use client"
import { Box, Text } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaTimes } from "react-icons/fa";

const ResultComponent = () => {
  const router = useRouter()
  useEffect (() => {
    setTimeout(()=>router.push('/'),5000)
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
      bgColor='orange'
      borderRadius='50%'
      padding={50}
      >
        <FaTimes color="white" size={300} />
      </Box>
      <Text
        fontSize="xx-large"
        fontWeight="bold"
        color='white'
       > 
       呼出に失敗しました。
      </Text>  
      <Text
        fontSize="x-large"
        fontWeight="bold"
        color='white'
       > 
       お手数ですが最初からやり直してください。
      </Text>  
    </Box>
  );
};

export default ResultComponent;
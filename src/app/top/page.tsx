"use client";
import { VStack, Image, Text, Button, Flex, Box } from '@kuma-ui/core';
import { useRouter } from 'next/navigation'

export const Top: React.FC = () => {
  
  const router = useRouter()
  
  const handleClick = (context:string) => {
    const dataToPass = context
    router.push(`/ConfirmCallDestination?data=${encodeURIComponent(dataToPass)}`)
  }
  return (
    <Flex maxWidth="768px" height={'100vh'} margin="0 auto" justifyContent={'center'} alignItems={'center'} backgroundImage="url('/hitocolor-logo.webp')" bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}>
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(255,255,255,0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
      <VStack gap="20px" alignItems="center" >
    
        <Text textAlign="center" fontSize={'x-large'} fontWeight={'bold'}>
          ご来訪いただきありがとうございます。<br />
          下記のボタンからご用件をお選びください。
        </Text>
       
        <VStack gap="10px" width="100%">
          <Button
            width="100%"
            height="150px"
            backgroundColor="white"
            color="black"
            fontSize={'x-large'}
            fontWeight={'bold'}
            border="1px solid #ccc"
            borderRadius="25px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            onClick={()=>handleClick('総合受付')}
          >
            総合受付
          </Button>
      
          <Button
            width="100%"
            height="150px"
            backgroundColor="white"
            color="black"
            fontSize={'x-large'}
            fontWeight={'bold'}
            border="1px solid #ccc"
            borderRadius="25px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            onClick={()=>handleClick('hitocolor採用面接')}
          >
            hitocolor採用面接
          </Button>
        </VStack>
      </VStack>
      </Box>

    </Flex>
  );
}

export default Top;


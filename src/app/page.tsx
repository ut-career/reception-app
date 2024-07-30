"use client";
import { VStack, Text, Button  } from '@kuma-ui/core';
import { useRouter } from 'next/navigation'

const Top: React.FC = () => {
  
  const router = useRouter()
  
  const handleClick = () => {
    router.push('/confirm-call-destination/general-reception')
  }

  const handleClick2 = () => {
    router.push('/confirm-call-destination/recruitment-interview')
  }
  
  return (
      <VStack gap="20px" alignItems="center" >
        <Text textAlign="center" fontSize='x-large' fontWeight='bold'>
          ご来訪いただきありがとうございます。<br />
          下記のボタンからご用件をお選びください。
        </Text>
       
        <VStack gap="10px" width="100%">
          <Button
            width="100%"
            height="150px"
            backgroundColor="white"
            color="black"
            fontSize='x-large'
            fontWeight='bold'
            border="1px solid #ccc"
            borderRadius="25px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            onClick={handleClick}
          >
            総合受付            
          </Button>
      
          <Button
            width="100%"
            height="150px"
            backgroundColor="white"
            color="black"
            fontSize='x-large'
            fontWeight='bold'
            border="1px solid #ccc"
            borderRadius="25px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            onClick={handleClick2}
          >
            hitocolor採用面接
          </Button>
        </VStack>
      </VStack>

  );
}

export default Top;


import { Flex, Box, VStack } from '@kuma-ui/core';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex maxWidth="768px" height='100vh' margin="0 auto" justifyContent='center' alignItems='center' backgroundImage="url('/rogo2-1.png')" bgRepeat='no-repeat' bgSize='contain' bgPosition='center'>
      <VStack gap="20px" alignItems="center">
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0,0,0,0.5)"  
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            backgroundColor="white"
            padding="20px"
            width="80%"
            maxWidth="500px"
            textAlign='center'
            border="1px solid #ccc"
            borderRadius="25px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          >{children}
        </Box>
      </Box>
    </VStack>
    </Flex>
  )
}

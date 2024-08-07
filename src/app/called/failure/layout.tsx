import { Flex, Box, VStack } from '@kuma-ui/core';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex maxWidth="768px" height='100vh' margin="0 auto" justifyContent='center' alignItems='center' backgroundImage="url('/hitocolor-logo.webp')" bgRepeat='no-repeat' bgSize='contain' bgPosition='center'>
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
         {children}
      </Box>
    </VStack>
    </Flex>
  )
}

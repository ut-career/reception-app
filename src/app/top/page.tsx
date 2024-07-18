"use client";

import React, { useState } from 'react';
import { VStack, Image, Text, Button, Flex, Box } from '@kuma-ui/core';

export const Top: React.FC = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleButtonClick = (option: string): void => {
    setSelectedOption(option);
    setShowDialog(true);
  };

  const handleCancel = (): void => {
    setShowDialog(false);
    setSelectedOption('');
  };

  const handleCall = (): void => {
    setShowDialog(false);
    setSelectedOption('');
  };

  return (
    <Flex maxWidth="768px" height={'100vh'} margin="0 auto" justifyContent={'center'} alignItems={'center'}>
      <VStack gap="20px" alignItems="center">
        <Image src="/hitocolor-logo.webp" alt="hitocolor logo" height="100px" />
        
        <Text textAlign="center" fontSize={'x-large'}>
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
            onClick={() => handleButtonClick('総合受付')}
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
            onClick={() => handleButtonClick('hitocolor採用面接')}
          >
            hitocolor採用面接
          </Button>
        </VStack>
      </VStack>

      {showDialog && (
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
            borderRadius="10px"
            width="80%"
            maxWidth="500px"
            textAlign={'center'}
          >
            <Text fontSize="x-large" marginBottom="20px" padding={'10px'} >
              「{selectedOption}」を呼び出します。<br />よろしいですか？
            </Text>
            <Flex justifyContent="space-around">
              <Button
                onClick={handleCancel}
                backgroundColor="#E4007F"
                border={'none'}
                borderRadius="5px"
                color="white"
                width={'150px'}
                fontSize="x-large"
                padding={'10px'}
              >
                キャンセル
              </Button>
              <Button
                onClick={handleCall}
                backgroundColor="#00A0E9"
                border={'none'}
                borderRadius="5px"
                color="white"
                width={'150px'}
                fontSize="x-large"
                padding={'10px'}
              >
                呼出
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Flex>
  );
}

export default Top;


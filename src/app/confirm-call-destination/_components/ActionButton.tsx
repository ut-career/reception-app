'use client';
import React from "react";
import { Box, Button, Flex,Text,css } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ENDPOINT_BASE_PATH = process.env.NEXT_PUBLIC_ENDPOINT_BASE_PATH

export const GeneralReceptionActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm = useSendMessage('general-reception')
  return <ActionButtons onConfirm={handleConfirm.onConfirm} onCancel={handleCancel} isLoading={handleConfirm.isLoading}/>
}

export const RecruitmentInterviewActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm = useSendMessage('recruitment-interview')
  return <ActionButtons onConfirm={handleConfirm.onConfirm} onCancel={handleCancel}  isLoading={handleConfirm.isLoading}/>
}

const useActionButton = () =>{
  const router = useRouter();
  const handleCancel: React.ComponentProps<typeof ActionButtons>['onCancel'] = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return handleCancel
}

const useSendMessage = (endpoint:string) =>{
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter()
  const onConfirm: React.ComponentProps<typeof ActionButtons>['onConfirm'] = async(e) => {
    setIsLoading(true)
    e.preventDefault();
    const response = await fetch(`${ENDPOINT_BASE_PATH}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    setIsLoading(false)
    if(response.ok){
      router.push('/called/success')
    }else{
    router.push('/called/failure')
  }
  }
 return {onConfirm,isLoading}
}

const spinAnimation = css`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = () => {
  return (
    <Box
      width="200px"
      height="200px"
      border="16px solid rgba(255,255,255,0.3)"
      borderTop="16px solid #00A0E9"
      borderRadius="50%"
      animation="spin 1s linear infinite"
      className={spinAnimation}
    />
  );
};

const ActionButtons: React.FC<{
  onConfirm: React.ComponentProps<'form'>['onSubmit']
  onCancel: React.ComponentProps<'form'>['onSubmit']
  isLoading:boolean
}> = ({
  onConfirm, onCancel,isLoading
}) => {
  return isLoading ? (
    <>
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
      <Flex justifyContent="center" flexDirection="column">
        <LoadingSpinner/>
        <Text color='white' fontSize='xx-large'>呼出中</Text>
      </Flex>
      </Box>
    </>
  ):(
      <Flex justifyContent="space-around">
      <form onSubmit={onCancel} >
        <Button
          type="submit"
          backgroundColor="#E4007F"
          border='none'
          borderRadius="5px"
          color="white"
          width='150px'
          fontSize="x-large"
          padding='10px'
        >
          キャンセル
        </Button>
      </form>
      <form onSubmit={onConfirm}>
        <Button
          type="submit"
          backgroundColor="#00A0E9"
          border='none'
          borderRadius="5px"
          color="white"
          width='150px'
          fontSize="x-large"
          padding='10px'
        >
          呼出
        </Button>
      </form>
    </Flex>
  );
};

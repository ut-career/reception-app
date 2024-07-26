'use client';

import { Button, Flex } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

const ENDPOINT_BASE_PATH = process.env.NEXT_PUBLIC_ENDPOINT_BASE_PATH

export const GeneralReceptionActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm = useSendMessage('general-reception')
  return <ActionButtons onConfirm={handleConfirm} onCancel={handleCancel} />
}

export const RecruitmentInterviewActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm = useSendMessage('recruitment-interview')
  return <ActionButtons onConfirm={handleConfirm} onCancel={handleCancel} />
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
  const sendMessage: React.ComponentProps<typeof ActionButtons>['onConfirm'] = async(e) => {
    e.preventDefault();
    const response = await fetch(`${ENDPOINT_BASE_PATH}/${endpoint}`, {
      method: 'POST',
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send message', status: response.status })
    }

    const data = await response.json()
    return data
  }
 return sendMessage
}

const ActionButtons: React.FC<{
  onConfirm: React.ComponentProps<'form'>['onSubmit']
  onCancel: React.ComponentProps<'form'>['onSubmit']
}> = ({
  onConfirm, onCancel
}) => {
  return (
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

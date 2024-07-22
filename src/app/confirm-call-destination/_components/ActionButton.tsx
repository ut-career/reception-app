'use client';

import { Button, Flex } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';

export const GeneralReceptionActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm: React.ComponentProps<typeof ActionButtons>['onConfirm'] = (e) => {
    e.preventDefault()
    alert('総合受付')
  }
  return <ActionButtons onConfirm={handleConfirm} onCancel={handleCancel} />
}

export const RecruitmentInterviewActionButtons = () => {
  const handleCancel = useActionButton()
  const handleConfirm: React.ComponentProps<typeof ActionButtons>['onConfirm'] = (e) => {
    e.preventDefault()
    alert('採用面接')
  }
  return <ActionButtons onConfirm={handleConfirm} onCancel={handleCancel} />
}

const useActionButton = () => {
  const router = useRouter();

  const handleCancel: React.ComponentProps<typeof ActionButtons>['onCancel'] = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return handleCancel
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

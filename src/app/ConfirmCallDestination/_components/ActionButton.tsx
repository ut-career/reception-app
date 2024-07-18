'use client';

import { Button, Flex } from '@kuma-ui/core';
import { useRouter } from 'next/navigation';

const ActionButtons = () => {
  const router = useRouter();

  const handleCancel= () => {
    router.back();
  };

  const handleConfirm = () => {
  };

  return (
    <Flex justifyContent="space-around">
      <Button
        backgroundColor="#E4007F"
        border={'none'}
        borderRadius="5px"
        color="white"
        width={'150px'}
        fontSize="x-large"
        padding={'10px'}
        onClick={handleCancel}
      >
        キャンセル
      </Button>
      <Button
        backgroundColor="#00A0E9"
        border={'none'}
        borderRadius="5px"
        color="white"
        width={'150px'}
        fontSize="x-large"
        padding={'10px'}
        onClick={handleConfirm}
      >
        呼出
      </Button>
    </Flex>
  );
};

export default ActionButtons;
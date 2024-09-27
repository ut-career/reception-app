"use client";
import { VStack, Text, Button, Box, Image  } from '@kuma-ui/core';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';

const colors = ['#E4007F', '#00A0E9', '#22AB37', '#F2914A', '#E2E64C'];

const ScreenSaver: React.FC = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
   <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor={colors[currentColorIndex]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="9998"
      transition="background-color 1s ease"
    >
      <Image
        src='/rogo-hc-100-520.png'
        alt='hitocolorロゴ'
        width='400px'
        position="absolute"
        animation="move 20s linear infinite"
      />
      <Button
        as="div"
        fontSize="2rem"
        color="white"
        backgroundColor="transparent"
        border="2px solid white"
        padding="1rem 2rem"
        borderRadius="5px"
        zIndex="9999"
        animation="blink 1.5s infinite"
      >
        画面をタップしてください
      </Button>
      <style jsx>{`
        @keyframes move {
          0% { transform: translate(-75%, -500%); }
          25% { transform: translate(75%, -500%); }
          50% { transform: translate(75%, 500%); }
          75% { transform: translate(-75%, 500%); }
          100% { transform: translate(-75%, -500%); }
        }
        @keyframes blink {
          0% {
            opacity: 1;       // 不透明
          }
          50% {
            opacity: 0.2;       // 完全に透明
          }
          100% {
            opacity: 1;       // 不透明
          }
        }
      `}</style>
    </Box>
  );
};

const Top: React.FC = () => {
  
  const router = useRouter()
  
  const handleClick = () => {
    router.push('/confirm-call-destination/general-reception')
  }

  const handleClick2 = () => {
    router.push('/confirm-call-destination/recruitment-interview')
  }
  
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timer);
      setActive(false);
    // 確認しやすいように3秒でスクリーンセーバーに切り替わるように
    // 足立さんに確認していただき次第30秒に戻します
      timer = setTimeout(() => setActive(true), 3000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    // 上と同じく
    timer = setTimeout(() => setActive(true), 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, []);
  
  return active ? (
    <ScreenSaver/>
  ): (
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


"use client";
import { Box, Button, Flex, Image } from "@kuma-ui/core";
import { useState, useEffect } from "react";

const colors = ["#E4007F", "#00A0E9", "#22AB37", "#F2914A", "#E2E64C"];

const Animation: React.FC = () => {
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
      display="flex"
      backgroundColor={colors[currentColorIndex] + "30"}
      justifyContent="center"
      alignItems="center"
      zIndex="9998"
      transition="background-color 1s ease"
    >
      <Image
        src="/rogo-hc-100-520.png"
        alt="hitocolorロゴ"
        width="400px"
        position="absolute"
        animation="move 20s linear infinite"
      />
      <Button
        as="div"
        fontSize="2rem"
        fontWeight="700"
        color="#5D5959"
        backgroundColor="transparent"
        border="4px solid #5D5959"
        padding="1rem 2rem"
        borderRadius="5px"
        zIndex="9999"
        animation="blink 3s ease-in-out infinite"
      >
        画面をタップしてください
      </Button>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translate(-75%, -500%);
          }
          25% {
            transform: translate(75%, -500%);
          }
          50% {
            transform: translate(75%, 500%);
          }
          75% {
            transform: translate(-75%, 500%);
          }
          100% {
            transform: translate(-75%, -500%);
          }
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          25% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export const ScreenSaver = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timer);
      setActive(false);
      timer = setTimeout(() => setActive(true), 30000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    timer = setTimeout(() => setActive(true), 30000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);
  return active ? <Animation /> : children;
};

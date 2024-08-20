import { Flex, Box } from '@kuma-ui/core';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'hitocolor 受付アプリ',
  description: 'hitocolor 受付アプリ',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'hitocolor 受付アプリ',
  },
  icons: {
    apple: '/icon/logo.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
      <Flex maxWidth="768px" height='100vh' margin="0 auto" justifyContent='center' alignItems='center' backgroundImage="url('/hitocolor-logo.webp')" bgRepeat='no-repeat' bgSize='contain' bgPosition='center'>
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(255,255,255,0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Box>
      </Flex>
      </body>
    </html>
  )
}

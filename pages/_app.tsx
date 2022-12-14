import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import "../styles/globals.css";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const activeChainId = parseInt(process.env.APP_CHAIN_ID || "1");
const authConfig= {
  domain: process.env.NEXT_PUBLIC_DOMAIN || "",
  authUrl: "/api/auth",
  loginRedirect: "/",
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThirdwebProvider desiredChainId={activeChainId} authConfig={authConfig}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
  );
};

export default MyApp;

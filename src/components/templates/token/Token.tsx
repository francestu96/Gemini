import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { IToken } from './types';

const Token: FC<IToken> = ({ tokens, error }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('token: ', tokens), [tokens]);

  const router = useRouter();
  const addr = router.query.addr;
  const token = tokens?.find((x: any) => x.addr == addr?.toString());

  console.log(token)
  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Token Info
      </Heading>
      {token ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
            {token.addr}
        </Box>
      ) : error ? <Box>{error}</Box> :
      (
        <Box>No token Found</Box>
      )}
    </>
  );
};

export default Token;

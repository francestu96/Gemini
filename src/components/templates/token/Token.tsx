import {
  Heading,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Error } from 'components/elements/Error';
import { FC } from 'react';
import { Errors } from 'utils/Errors';
import { IToken } from './types';

const Token: FC<IToken> = ({ token, error }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Token Info
      </Heading>
      {token ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
            {token.addr}
        </Box>
      ) : error === Errors.ConnectWallet ? <Error msg={Errors.ConnectWallet}/> 
        : <Error msg={Errors.Unknown}/>
      }
    </>
  );
};

export default Token;

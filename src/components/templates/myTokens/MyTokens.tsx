import {
  Heading,
  Box,
  Image,
  Flex,
  Button,
  TableContainer,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { Error } from 'components/elements/Error';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IoIosRocket } from 'react-icons/io';
import { Errors } from 'utils/Errors';
import { ITokens } from 'utils/types';

const MyTokens: FC<ITokens> = ({ tokens, user, error }) => {
  function handleRowClick(token: string) {
    router.push('/' + token)
  }

  const router = useRouter();
  
  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Your Tokens
      </Heading>
      { error ? <Error msg={error}/> 
       : tokens ? (
        <Box>
        <TableContainer borderWidth='2px' borderRadius='lg' pl={4} pr={4}>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Asset</Th>
                <Th>Symbol</Th>
                <Th>Launch</Th>
                <Th isNumeric>Votes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                tokens.map(token => (
                  <Tr onClick={() => handleRowClick(token.addr)} key={token.addr}>
                    <Td>
                      <Flex>
                        <Box flex="25">
                          <Image src={token.logo} borderRadius="full" boxSize="50px" />
                        </Box>
                        <Box flex="75">
                          {token.name}
                          <Box>
                            <Button colorScheme='blue' size="xs" mr={1}>BSC</Button>
                            {
                              token.audited && <Button colorScheme='teal' size="xs">Audited</Button>
                            }
                          </Box>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>{token.symbol}</Td>
                    <Td>{token.launch}</Td>
                    <Td textAlign={"right"}>
                      <Button colorScheme='teal'>
                        <Icon as={IoIosRocket} marginRight="0.7em"/>
                        {token.votes}
                      </Button>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
      ) : <Error msg={Errors.Unknown}/>
      }
    </>
  );
};

export default MyTokens;

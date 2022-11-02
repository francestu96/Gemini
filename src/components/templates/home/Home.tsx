import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { IoIosRocket } from "react-icons/io";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const Home = () => {
  const tokens = [
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 1',
      symbol: 'TKN1',
      chain: 1,
      audited: true,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x1'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 2',
      symbol: 'TKN2',
      chain: 1,
      audited: true,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x2'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 3',
      symbol: 'TKN3',
      chain: 1,
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x3'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 4',
      symbol: 'TKN4',
      chain: 1,
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x4'
    },
    {
      logo: '/token-logo.jpg',
      name: 'Token Name 5',
      symbol: 'TKN5',
      chain: 1,
      audited: false,
      launch: '10/10/2022',
      votes: '500',
      addr: '0x5'
    }
  ]

  function handleRowClick(token: string) {
    console.log("Clicked on '" + token + "'");
    router.push('/' + token)
  }

  const router = useRouter();

  return (
    <Box>
      <Heading size="md" textAlign="center" marginBottom={6}>
        Token List
      </Heading>
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
  );
};

export default Home;

import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem, Box, Flex, Image, Button, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

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
        },
        {
            logo: '/token-logo.jpg',
            name: 'Token Name 2',
            symbol: 'TKN2',
            chain: 1,
            audited: true,
            launch: '10/10/2022',
            votes: '500',
        },
        {
            logo: '/token-logo.jpg',
            name: 'Token Name 3',
            symbol: 'TKN3',
            chain: 1,
            audited: false,
            launch: '10/10/2022',
            votes: '500',
        },
        {
            logo: '/token-logo.jpg',
            name: 'Token Name 4',
            symbol: 'TKN4',
            chain: 1,
            audited: false,
            launch: '10/10/2022',
            votes: '500',
        },
        {
            logo: '/token-logo.jpg',
            name: 'Token Name 5',
            symbol: 'TKN5',
            chain: 1,
            audited: false,
            launch: '10/10/2022',
            votes: '500',
        }
    ]

    function handleRowClick(token: string) {
        alert("Clicked on '" + token + "'")
    }

    const result = [];

    for (const token of tokens){
        result.push(
            <Tr onClick={() => handleRowClick(token.name)}>
                <Td>
                    <Flex>
                        <Box flex="25">
                            <Image src={token.logo} borderRadius="full" boxSize="50px"/>
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
                <Td isNumeric>{token.votes}</Td>
            </Tr>
        )
    }

    return (
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
                    {result}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default Home;

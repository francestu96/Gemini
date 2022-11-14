import {
  Heading,
  Box,
  useColorModeValue,
  Badge,
  Image,
  Flex,
  Text,
  HStack,
  Button,
  VStack,
  useToast
} from '@chakra-ui/react';
import { Error } from 'components/elements/Error';
import { FC } from 'react';
import { Errors } from 'utils/Errors';
import { IToken } from './types';

const Token: FC<IToken> = ({ token, error }) => {
  const toast = useToast();
  const boxColor = useColorModeValue('gray.200', 'gray.600');
  
  function handleCopyClick(tokenName: string) {
    navigator.clipboard.writeText(tokenName);
    toast({description: "copied", status: 'info', position: 'bottom-right', isClosable: true, duration: 2000});
  }

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Token Info
      </Heading>
      { error ? <Error msg={error}/> 
       : token ? (
        <Box borderWidth='2px' borderRadius='lg' p="2em">
          <Flex align="center" justify="space-between">
            <HStack alignItems="top">
              <Image src={token.logo} borderRadius="full" boxSize="100px" />
              <VStack alignItems="flex-start" justify="space-between">
                <HStack>
                  <Text fontSize="3xl" pl="0.5em" fontWeight="bold">{token.name}</Text>
                  <Box>
                    <Badge borderRadius='lg' fontSize="lg" colorScheme='teal'>{token.symbol}</Badge>
                  </Box>
                </HStack>
                <Text pl="1em" color="grey">Launch on: <b>{token.launch}</b></Text>
              </VStack>
            </HStack>
            <VStack alignItems="center">
              <Button size="lg" width="10em" colorScheme="teal" fontWeight="bold">VOTE</Button>
              <Button size="sm" colorScheme="blue" fontWeight="bold">
                <Image src="metamask.svg" width="22px" height="22px" marginRight="0.7em"/>
                Add to Wallet
              </Button>
            </VStack>
          </Flex>
          <Box bgColor={boxColor} marginTop="1em" borderRadius='lg' p="0.2em 0.5em" width="fit-content">
            <HStack>
              <Text marginRight="0.2em"><b>{token.chain}</b>: {token.addr}</Text>
              <Image src="copy-white.svg" onClick={() => handleCopyClick(token.addr)} className="change-cursor"/>
            </HStack>
          </Box>
          <Flex marginTop="1em" borderTop="1px solid grey" justify="space-between">
            <HStack marginTop="1em">
              <Button colorScheme="orange" borderRadius="full">
                <Image src="telegram.svg"/>
              </Button>
              <Button colorScheme="orange" borderRadius="full">
                <Image src="twitter.svg"/>
              </Button>
              <Button colorScheme="orange" borderRadius="full">
                <Image src="discord.svg"/>
              </Button>
              <Button colorScheme="orange" borderRadius="full">
                <Image src="website.svg"/>
              </Button>
            </HStack>
            <Box borderWidth='5px' borderRadius='3xl' p="0.5em" marginTop="1em" width="12em" textAlign="center" verticalAlign="center">
              Votes: <Text as="span" fontWeight="bold" fontSize="2xl">{token.votes}</Text>
            </Box>
          </Flex>
        </Box>
      ) : <Error msg={Errors.Unknown}/>
      }
    </>
  );
};

export default Token;

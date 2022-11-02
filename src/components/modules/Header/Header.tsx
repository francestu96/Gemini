import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, useColorModeValue, VStack } from '@chakra-ui/react';
import { ColorModeButton, Logo, NavItem } from 'components/elements';
import React, { useState } from 'react';
import { ConnectButton } from '../ConnectButton';
import NAV_LINKS from './paths';

const Header = () => {
  const [display, changeDisplay] = useState('none')

  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color" p={'10px'}>
        <Flex align="center" justify="space-between" display={['none', 'none', 'flex','flex']}>
          <Logo />
          <HStack gap={'15px'}>
            {NAV_LINKS.map((link) => (
              <NavItem key={`link-${link.label}`} {...link} />
            ))}
          </HStack>
          <HStack gap={'10px'}>
            <ConnectButton />
            <ColorModeButton />
          </HStack>
        </Flex>
        <Flex align="center" justify="space-between" display={['flex', 'flex', 'none','none']}>
          <Logo />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={
              <HamburgerIcon />
            }
            onClick={() => changeDisplay('flex')}
          />
        </Flex>     
        <Flex w='100vw' display={display} bgColor={useColorModeValue('white', 'gray.800')} zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflowY="auto" flexDir="column"
        >
          <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>
          <VStack gap={'15px'}>
            <HStack gap={'10px'}>
              <ConnectButton />
              <ColorModeButton />
            </HStack>
            {NAV_LINKS.map((link) => (
              <NavItem key={`link-${link.label}`} {...link} />
            ))}
          </VStack>
        </Flex>   
    </Box>
  );
};

export default Header;

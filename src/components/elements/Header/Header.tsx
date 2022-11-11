import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, useColorModeValue, useColorMode, VStack, useDisclosure, Fade, ScaleFade, Slide } from '@chakra-ui/react';
import { ColorModeButton, Logo, NavItem } from 'components/elements';
import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import NAV_LINKS from './paths';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

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
            <ConnectWallet accentColor={colorMode === "dark" ? "#90cdf4" : "#3182ce"}/>
            <ColorModeButton />
          </HStack>
        </Flex>
        <Flex align="center" justify="space-between" display={['flex', 'flex', 'none','none']}>
          <Logo />
          <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
        </Flex>    
        <Slide in={isOpen} transition={{"enter": {duration: 0.5}, "exit": {duration: 0.5}}} style={{ zIndex: 10 }}>
          <Flex w='100vw' bgColor={useColorModeValue('white', 'gray.800')} h="100vh" flexDir="column">
            <Flex justify="flex-end">
            <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon/>}onClick={onToggle}/>
          </Flex>
            <VStack gap={'15px'}>
              <HStack gap={'10px'}>
                <ConnectWallet accentColor={colorMode === "dark" ? "#90cdf4" : "#3182ce"}/>
                <ColorModeButton />
              </HStack>
              {NAV_LINKS.map((link) => (
                <NavItem key={`link-${link.label}`} {...link} />
              ))}
            </VStack>
          </Flex>   
        </Slide> 
    </Box>
  );
};

export default Header;

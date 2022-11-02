import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/logo.png' : '/logo.png'}
      height={45}
      width={150}
      alt="Gemini"
    />
  );
};

export default Logo;

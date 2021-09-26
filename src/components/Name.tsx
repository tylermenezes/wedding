import { ChakraProps, Box, Heading, Text, Image } from '@chakra-ui/react';

export interface NameProps extends ChakraProps {
  style?: 'full' | 'short' | 'icon'
}

export default function Name({ style, ...rest }: NameProps) {
  if (style === 'icon') {
    return (
      <Box {...rest}>
        <Image src="/website-frame.png" alt="Phoebe Askelson & Tyler Menezes" h={28} maxWidth="initial" />
      </Box>
    )
  }
  return (
    <Box {...rest}>
      <Heading as="h1">
        {style === 'full' ? 'Phoebe Askelson & Tyler Menezes' : 'Tyler & Phoebe'}
      </Heading>
    </Box>
  )
}

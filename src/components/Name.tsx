import { ChakraProps, Box, Heading, Text } from '@chakra-ui/react';

export interface NameProps extends ChakraProps {
  style?: 'full' | 'short' | 'icon'
}

export default function Name({ style, ...rest }: NameProps) {
  return (
    <Box {...rest}>
      <Heading as="h1">
        {style === 'full' ? 'Phoebe Askelson & Tyler Menezes' : 'Tyler & Phoebe'}
      </Heading>
    </Box>
  )
}

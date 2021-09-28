import { ChakraProps, Box, Grid, Text } from '@chakra-ui/react';
import config from '../config';

export default function Faq(props: ChakraProps) {
  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={8}>
      {config.faqs.sort((a, b) => a.a.length > b.a.length ? -1 : 1).map(({ q, a}) => (
        <Box key={q}>
          <Text mb={2} fontSize="lg" fontWeight="bold" fontFamily="heading">{q}</Text>
          <Text>{a}</Text>
        </Box>
      ))}
    </Grid>
  )
}

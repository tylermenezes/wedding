import { ChakraProps, Box, Heading, Text } from '@chakra-ui/react';
import config from '../config';

export default function NameDate(props: ChakraProps) {
  return (
      <Text {...props}>
        {config.schedule.starts.setZone(config.tz).toLocaleString({
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </Text>
  )
}

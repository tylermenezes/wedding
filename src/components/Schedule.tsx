import { ChakraProps, Text, List, ListItem } from '@chakra-ui/react';
import config from '../config';

export default function Schedule(props: ChakraProps) {
  return (
    <List {...props}>
      {config.schedule.events.map((e) => (
        <ListItem key={e.title}>
          <Text as="span" fontWeight="bold">
            {e.datetime.setZone(config.tz).toLocaleString({ hour: 'numeric', minute: '2-digit' })}:{' '}
          </Text>
          {e.title}
        </ListItem>
      ))}
    </List>
  );
}

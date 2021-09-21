import { ChakraProps, Box, Text, Icon } from '@chakra-ui/react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { ImLocation2 } from 'react-icons/im';
import config from '../config';

const Map = ReactMapboxGl({ accessToken: config.mapbox.accessToken, interactive: false });

export default function Address(props: ChakraProps) {
  return (
    <Box {...props}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={config.venue.coords}
        zoom={[12]}
        containerStyle={{
          height: '15rem',
        }}
      >
        <Marker
          coordinates={config.venue.coords}
          anchor="bottom"
        >
          <Icon fontSize="4xl" color="red.500" as={ImLocation2} />
        </Marker>
      </Map>
      <Text mt={4} mb={2}>
        <Text as="span" fontWeight="bold">{config.venue.name}</Text><br />
        {config.venue.address.line1}<br />
        {config.venue.address.line2 && <>{config.venue.address.line2}<br /></>}
        {config.venue.address.city}, {config.venue.address.state} {config.venue.address.postal}
      </Text>
      {config.venue.description && (<Text fontStyle="italic">{config.venue.description}</Text>)}
    </Box>
  );
}

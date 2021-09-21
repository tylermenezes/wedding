import { ChakraProps, Box, IconButton } from '@chakra-ui/react';
import { ImAppleinc, ImGoogle3 } from 'react-icons/im';
import { makeAppleMapsUrl, makeGoogleMapsUrl } from '../utils';
import config from '../config';

export default function MapOptionButton(props: ChakraProps) {
  return (
    <Box d="inline-block" {...props}>
      <IconButton
        aria-label="Apple Maps"
        icon={<ImAppleinc />}
        as="a"
        href={makeAppleMapsUrl(config.venue.address)}
        variant="ghost"
        target="_blank"
      />
      <IconButton
        aria-label="Google Maps"
        icon={<ImGoogle3 />}
        as="a"
        href={makeGoogleMapsUrl(config.venue.address)}
        variant="ghost"
        target="_blank"
      />
    </Box>
  )
}

import { ReactNode } from 'react';
import {
  Box,
  Grid,
  Container,
  Button,
  Text,
  ChakraProps,
  Link,
  Icon,
} from '@chakra-ui/react';
import Head from 'next/head';
import { ImHeart } from 'react-icons/im';
import config from '../config';
import { makeGoogleMapsUrl } from '../utils';
import MobileFriendlyMenu from './MobileFriendlyMenu';
import Name from './Name';
import Date from './Date';

export interface PageProps extends ChakraProps {
  style: 'full' | 'hero'
  children?: ReactNode
}

export default function Page({ style, children, ...rest }: PageProps) {
  return (
    <>
      <Head>
        <title>Askelson-Menezes Wedding</title>
      </Head>
      <Box p={8} pb={16} {...rest}>
        <Container mb={16} maxW="container.xl">
          <Grid templateColumns="1fr minmax(0, 100%)" gap={8} alignItems="center">
            <Box>
              <Name style={style === 'hero' ? 'icon' : 'short'} whiteSpace="nowrap" />
              {style !== 'hero' && (<Date />)}
            </Box>
            <Box textAlign="right">
              <MobileFriendlyMenu>
                {config.links.map((l) => (
                  <Link
                    key={l.url}
                    as="a"
                    href={l.url}
                    target="_blank"
                  >
                    {l.name}
                  </Link>
                ))}
                <Button
                  as="a"
                  href={makeGoogleMapsUrl(config.venue.address)}
                  target="_blank"
                >
                  Map
                </Button>
              </MobileFriendlyMenu>
            </Box>
          </Grid>
        </Container>

        {children}

        <Container mt={16} maxW="container.xl">
          <Grid templateColumns="1fr minmax(0, 100%)" gap={8}>
            <Text color="gray.500" whiteSpace="nowrap" fontSize="sm">
              Made with <Icon as={ImHeart} /> by Tyler &amp; Phoebe in Philadelphia<br />
              &copy; 2021-2022
            </Text>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

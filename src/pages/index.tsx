import { Heading, Text, Box, Container, VStack, Alert, AlertTitle, AlertDescription, AlertIcon, Grid, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { Page, Name, Date, Schedule, Address, MapOptionButton, HotelsButton, Rsvp, Faq } from '../components';
import { ImPencil2 } from 'react-icons/im';
import config from '../config';
import imgVertical from '../../photos/v1.jpg';
import imgHorizontal1 from '../../photos/h1.jpg';
import imgHorizontal2 from '../../photos/h2.jpg';

export default function IndexPage() {
  return (
    <Page style="hero">
      <Container
        maxW="container.full"
        minH="lg"
        backgroundImage="/hero.jpg"
        backgroundSize="cover"
        backgroundPosition="50% 35%"
        backgroundRepeat="no-repeat"
        mb={12}
      >
        <VStack h="lg" justifyContent="space-evenly" color="white" textShadow="0 0 10px rgba(0, 0, 0, 0.7)">
          <Box>
            <Name textAlign="center" style="full" mb={6} />
            <Date textAlign="center" fontSize="2xl" fontFamily="heading" fontWeight="bold" />
          </Box>
        </VStack>
      </Container>

      <Container mb={12} maxW="container.sm" borderColor="purple.700" borderWidth={2} p={4} rounded="sm" shadow="md">
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={4}>RSVP</Heading>
        <Rsvp />
      </Container>

      <Container mb={12} maxW="container.xl" backgroundColor="purple.100" pt={4} pb={4}>
        <Container maxW="container.md">
          <Alert colorScheme="purple">
            <AlertIcon as={ImPencil2} alignSelf="flex-start" />
            <Box>
              <AlertTitle color="purple.700" mb={4}>Note from Phoebe &amp; Tyler</AlertTitle>
              <AlertDescription fontSize="lg" lineHeight={1.4}>
                <Text mb={4}>
                  This is a wedding in every sense, but not a traditional wedding in every sense! We are picking and
                  choosing the traditions we want to keep.
                </Text>
                <Text mb={4}>
                  We aren&apos;t having a wedding party or setting wedding colors (and rather than formal invitations,
                  we{' '}
                  <Link href="https://www.flickr.com/photos/186643214@N02/albums/72177720296186294" target="_blank">
                    designed and screen printed
                  </Link>
                  {' '}you some art). Phoebe is making her own dress, and we're making the rings too. It will be small.
                </Text>
                <Text>
                  We can&apos;t wait to celebrate with you!
                </Text>
              </AlertDescription>
            </Box>
          </Alert>
        </Container>
      </Container>

      <Container maxW="container.lg" mb={12}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr'}} gap={16}>
          <Box>
            <Heading as="h3" fontSize="2xl" mb={4}>Schedule</Heading>
            <Schedule mb={12} />

            <Heading as="h3" fontSize="2xl" mb={4}>Dress Code</Heading>
            <Text mb={12}>{config.dressCode}</Text>

            <Heading as="h3" fontSize="2xl" mb={4}>COVID Precautions</Heading>
            <Text mb={2}>
              We don&apos;t know exactly what the state of the world will be in August 2022, but Wisteria Hall has
              mixed indoor-outdoor seating which we expect will provide a safe venue. Guests be fully vaccinated by the
              time they attend.
            </Text>
          </Box>
          <Box>
            <Grid templateColumns="1fr 1fr" gap={2} mb={4}>
              <Heading as="h3" d="inline" fontSize="2xl">Location</Heading>
              <Box textAlign="right" fontWeight="bold" color="gray.500">
                <Text as="span" d="inline-block" mr={2} fontSize="sm">Map:</Text>
                <MapOptionButton mt={-2} />
              </Box>
            </Grid>
            <Address />


            <Heading as="h3" fontSize="2xl" mb={4} mt={12}>Travel</Heading>
            <Text mb={2}>
              <Text as="span" fontWeight="bold">Hotels:</Text> {config.hotels}
              <HotelsButton size="xs" rounded="sm" ml={2} />
            </Text>
            <Text mb={2}>
              <Text as="span" fontWeight="bold">Parking:</Text> {config.venue.parking}
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">Public Transportation:</Text> {config.venue.publicTransportation}
            </Text>
          </Box>
        </Grid>
      </Container>

      <Container maxW="container.lg" mt={{ base: 12, md: 24 }}>
        <Grid templateColumns="1fr 1fr" gap={4}>
          <Box>
            <Image src={imgVertical} placeholder="blur" alt="" sizes="500px" />
          </Box>
          <Box>
            <Box maxH="calc(50% - var(--chakra-space-4) * 1.4)" objectFit="cover" overflow="hidden" mb={4}>
              <Image src={imgHorizontal1} alt="" placeholder="blur" sizes="500px" />
            </Box>
            <Box maxH="calc(50% - var(--chakra-space-4) * 1.4)" objectFit="cover" overflow="hidden">
              <Image src={imgHorizontal2} placeholder="blur" alt="" sizes="500px" />
            </Box>
          </Box>
        </Grid>
        <Text fontSize="sm" color="gray.700" mt={-4}>
          Photography by <Link href="https://www.shawntse.wedding/" target="_blank">Shawn Tse</Link>.
          (Header photo by Katie Bustin.)
        </Text>
      </Container>

      <Container maxW="container.lg" mt={{ base: 12, md: 24 }}>
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={8}>FAQs</Heading>
        <Faq />
      </Container>
    </Page>
  )
}

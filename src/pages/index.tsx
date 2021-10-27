import { Heading, Text, Box, Container, VStack, Alert, AlertTitle, AlertDescription, AlertIcon, Grid } from '@chakra-ui/react';
import { Page, Name, Date, Schedule, Address, MapOptionButton, HotelsButton, Rsvp, Faq } from '../components';
import { ImBug } from 'react-icons/im';
import config from '../config';

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
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={8}>RSVP</Heading>
        <Rsvp textAlign="center" justifyContent="center" />
      </Container>

      <Container maxW="container.lg" mb={12}>
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={8}>Wedding-Day Info</Heading>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr'}} gap={16}>
          <Box>
            <Heading as="h3" fontSize="2xl" mb={4}>Schedule</Heading>
            <Schedule mb={12} />

            <Heading as="h3" fontSize="2xl" mb={4}>Travel</Heading>
            <Text mb={2}>
              <Text as="span" fontWeight="bold">Hotels:</Text> {config.hotels}
              <HotelsButton size="xs" rounded="sm" ml={2} />
            </Text>
            <Text mb={2}>
              <Text as="span" fontWeight="bold">Parking:</Text> {config.venue.parking}
            </Text>
            <Text mb={12}>
              <Text as="span" fontWeight="bold">Public Transportation:</Text> {config.venue.publicTransportation}
            </Text>

            <Heading as="h3" fontSize="2xl" mb={4}>Dress Code</Heading>
            <Text>{config.dressCode}</Text>
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
          </Box>
        </Grid>
      </Container>

      <Container mb={12} maxW="container.xl" backgroundColor="purple.100" pt={4} pb={4}>
        <Container maxW="container.md">
          <Alert colorScheme="purple">
            <AlertIcon as={ImBug} alignSelf="flex-start" />
            <Box>
              <AlertTitle>COVID Precautions</AlertTitle>
              <AlertDescription>
                <Text mb={2}>
                  We don&apos;t know exactly what the state of the world will be in August 2022, but Wisteria Hall has
                  mixed indoor-outdoor seating which we expect will provide a safe venue (with a lower risk of
                  cancellation).
                </Text>
                <Text>
                  At this time we expect that we will require that all guests be fully vaccinated by the time they attend,
                  and we may require masks.
                </Text>
              </AlertDescription>
            </Box>
          </Alert>
        </Container>
      </Container>

      <Container maxW="container.lg">
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={8}>FAQs</Heading>
        <Faq />
      </Container>
    </Page>
  )
}

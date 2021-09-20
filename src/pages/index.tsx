import { Heading, Text, Box, Container, VStack, Grid } from '@chakra-ui/react';
import { Page, Name, Date, Schedule, Address, MapOptionButton } from '../components';
import config from '../config';

export default function IndexPage() {
  return (
    <Page style="hero">
      <Container
        maxW="container.full"
        minH="lg"
        backgroundImage="/hero.jpg"
        backgroundSize="cover"
        backgroundPosition="50% 50%"
        backgroundRepeat="no-repeat"
        mb={12}
      >
        <VStack h="lg" justifyContent="space-evenly" color="white" textShadow="0 0 10px rgba(0, 0, 0, 0.7)">
          <Box>
            <Name textAlign="center" style="full" mb={6} />
            <Date textAlign="center" fontSize="2xl" fontWeight="bold" />
          </Box>
        </VStack>
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
            </Text>
            <Text mb={2}>
              <Text as="span" fontWeight="bold">Parking:</Text> {config.venue.parking}
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">Public Transportation:</Text> {config.venue.publicTransportation}
            </Text>
          </Box>
          <Box>
            <Grid templateColumns="1fr 1fr" gap={2} mb={4}>
              <Heading as="h3" d="inline" fontSize="2xl">Location</Heading>
              <Box textAlign="right" fontWeight="bold" color="gray.500">
                <Text as="span" d="inline-block" mr={2} fontSize="sm">Map:</Text>
                <MapOptionButton />
              </Box>
            </Grid>
            <Address />
          </Box>
        </Grid>
      </Container>

      <Container maxW="container.md">
        <Heading as="h3">COVID Information</Heading>
        <Text>
          The ceremony and reception are in an indoor-outdoor space with plenty of airflow. We request that all guests
          be vaccinated, and we may request that you wear a mask depending on the state of the world in 2022.
        </Text>
      </Container>
    </Page>
  )
}

import { DateTime } from 'luxon';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  tz: "America/Los_Angeles",
  venue: {
    name: "Wisteria Hall",
    coords: [-122.29450164431378, 47.639823612421104] as [number, number],
    address: {
      line1: "2300 Arboretum Dr E",
      line2: "Wisteria Hall",
      city: "Seattle",
      state: "Washington",
      stateCode: "WA",
      postal: "98112",
    },
    description: "Located in the Washington Park Arboretum",
    publicTransportation: "It's a 25min walk or a short Lyft ride from the UW light rail station.",
    parking: "Next to the venue (overflow in the park).",
  },
  dressCode: "Cocktail-party attire - nothing too fancy. The venue is open-air so dress for the weather.",
  hotels: "We do not have a block.",
  hotelsLink: "https://weirdvector.notion.site/Hotels-ba050fb8345a4255ba143d7bb8ab37ef",
  schedule: {
    starts: DateTime.fromISO("2022-08-14T15:30-0700"),
    ends: DateTime.fromISO("2022-08-14T21:00-0700"),
    events: [
      {
        title: "Doors",
        datetime: DateTime.fromISO("2022-08-14T15:30-0700"),
      },
      {
        title: "Ceremony",
        datetime: DateTime.fromISO("2022-08-14T16:00-0700"),
      },
      {
        title: "Cocktail Hour",
        datetime: DateTime.fromISO("2022-08-14T16:30-0700"),
      },
      {
        title: "Dinner",
        datetime: DateTime.fromISO("2022-08-14T17:30-0700"),
      },
      {
        title: "Ends",
        datetime: DateTime.fromISO("2022-08-14T21:30-0700"),
      },
    ]
  },
  livestream: null,
  mapbox: {
    accessToken: 'pk.eyJ1IjoidHlsZXJtZW5lemVzIiwiYSI6ImNrdHQ3c21xZzA0YmQyc21vcW9nM2UxMjgifQ.03mQUeuYgBRgcH-YwJSlng',
  },
  links: [
    {
      name: 'Things to Do',
      url: 'https://weirdvector.notion.site/Things-to-Do-in-Seattle-be49395a27c04b5d88786c973819b793',
    },
    {
      name: 'Hotels',
      url: 'https://weirdvector.notion.site/Hotels-ba050fb8345a4255ba143d7bb8ab37ef',
    },
    {
      name: 'About Phoebe',
      url: 'https://askelson.net/'
    },
    {
      name: 'About Tyler',
      url: 'https://en.wikipedia.org/wiki/Tyler_Menezes'
    },
  ],
  faqs: [
    {
      q: 'Will I have to pay for parking?',
      a: 'There is free parking available!'
    },
    {
      q: 'Are kids welcome?',
      a: `We request that you don't bring children as we're very short on space. (Contact us first if you really need to!)`
    },
    {
      q: 'Can I bring a date?',
      a: `Most invites already include a +1. If you need more please contact us first.`
    },
    {
      q: 'When is the RSVP deadline?',
      a: `A month prior, please!`
    },
    {
      q: 'Where is the reception?',
      a: 'The entire wedding is in the same venue. No need to go anywhere!'
    },
    {
      q: 'What if I have a dietary restriction?',
      a: 'We will have vegetarian options available, but please contact us if you are vegan, gluten-free, dairy-free, etc.'
    },
    {
      q: 'Can I take pictures?',
      a: `Sure, but we'll have plenty of official pictures. Please make sure to enjoy yourself too.`
    },
    {
      q: 'Is there a gifts registry?',
      a: 'We will figure something out for this, check back soon.'
    },
    {
      q: 'How do I contact you?',
      a: 'wedding@xanadu.ws'
    }
  ]
}

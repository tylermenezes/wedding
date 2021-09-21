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
    parking: "Parking is available directly next to the venue (overflow parking in the park).",
  },
  dressCode: "Cocktail-party attire - nothing too fancy. The venue is open-air so dress for the weather.",
  hotels: "Any hotel in downtown, capitol hill, or first hill is relatively nearby.",
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
      url: 'https://weirdvector.notion.site/70cda8e7478040d880cf768612ca617e',
    },
    {
      name: 'About Phoebe',
      url: 'https://askelson.net/'
    },
    {
      name: 'About Tyler',
      url: 'https://tyler.vc/'
    },
  ]
}

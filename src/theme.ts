import { extendTheme } from '@chakra-ui/react';

export const GOOGLE_FONTS_LOAD = [
  'Alata:ital,wght@0,400;0,700;1,400;1,700',
  'Inter:ital,wght@0,400;0,700;1,400;1,700',
];
export const FONT_FAMILIES_URL = `https://fonts.googleapis.com/css2?${GOOGLE_FONTS_LOAD.map((f) => `family=${encodeURIComponent(f)}`).join('&')}&display=swap`;

export default extendTheme({
  styles: {
    global: {
      body: {
        color: 'gray.900',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "blue.900",
        textDecoration: "underline",
        _hover: {
          color: "blue.700",
        },
      },
    },
  },
  fonts: {
    heading: 'Alata, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    black: "#4a3b44",
    gray: {
      "50": "#F3F2F2",
      "100": "#DDDADC",
      "200": "#C7C2C5",
      "300": "#B1AAAE",
      "400": "#9B9298",
      "500": "#857A81",
      "600": "#6A6267",
      "700": "#50494E",
      "800": "#353134",
      "900": "#1B181A"
    },
    pink: {
      "50": "#F8ECF4",
      "100": "#ECCBE1",
      "200": "#E0A9CE",
      "300": "#D487BB",
      "400": "#C765A7",
      "500": "#BB4494",
      "600": "#963676",
      "700": "#702959",
      "800": "#4B1B3B",
      "900": "#250E1E"
    },
    red: {
      "50": "#F8EDEE",
      "100": "#EBCBD1",
      "200": "#DFAAB3",
      "300": "#D28995",
      "400": "#C56777",
      "500": "#B94659",
      "600": "#943847",
      "700": "#6F2A35",
      "800": "#4A1C24",
      "900": "#250E12"
    },
    orange: {
      "50": "#F9F0EB",
      "100": "#F0D5C7",
      "200": "#E6BAA3",
      "300": "#DC9E7F",
      "400": "#D2835B",
      "500": "#C86837",
      "600": "#A0532C",
      "700": "#783E21",
      "800": "#502A16",
      "900": "#28150B"
    },
    yellow: {
      "50": "#FAF7EB",
      "100": "#F1EAC6",
      "200": "#E8DCA1",
      "300": "#DECE7C",
      "400": "#D5C058",
      "500": "#CCB333",
      "600": "#A38F29",
      "700": "#7A6B1F",
      "800": "#524714",
      "900": "#29240A"
    },
    green: {
      "50": "#EDFAEB",
      "100": "#CDF1C6",
      "200": "#ADE8A1",
      "300": "#8CDF7C",
      "400": "#6CD657",
      "500": "#4CCD32",
      "600": "#3DA428",
      "700": "#2D7B1E",
      "800": "#1E5214",
      "900": "#0F290A"
    },
    teal: {
      "50": "#EBFAF7",
      "100": "#C6F1E7",
      "200": "#A1E8D8",
      "300": "#7CDFC9",
      "400": "#57D6BA",
      "500": "#32CDAB",
      "600": "#28A489",
      "700": "#1E7B67",
      "800": "#145244",
      "900": "#0A2922"
    },
    cyan: {
      "50": "#EBF8FA",
      "100": "#C6ECF1",
      "200": "#A1DFE7",
      "300": "#7DD3DE",
      "400": "#58C7D5",
      "500": "#34BACB",
      "600": "#2995A3",
      "700": "#1F707A",
      "800": "#154A51",
      "900": "#0A2529"
    },
    blue: {
      "50": "#EBF5FA",
      "100": "#C6E3F0",
      "200": "#A2D0E7",
      "300": "#7DBEDE",
      "400": "#58ACD4",
      "500": "#3499CB",
      "600": "#2A7BA2",
      "700": "#1F5C7A",
      "800": "#153D51",
      "900": "#0A1F29"
    },
    purple: {
      "50": "#F1EDF7",
      "100": "#D7CEE9",
      "200": "#BDAEDB",
      "300": "#A38ECD",
      "400": "#896EBF",
      "500": "#6F4EB1",
      "600": "#583F8D",
      "700": "#422F6A",
      "800": "#2C1F47",
      "900": "#161023"
    },
  },
})

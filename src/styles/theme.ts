import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#d1d8e4",
      "500": "#C4C4C4",
    },
    blue: {
      "500": "#3c74ed"
    },
    green: {
      "200" : "#c7ffa6",
      
    }
  },
  styles: {
    global: {
      body: {
        bg: "gray.300",
        fontFamily: "Poppins"
      },
    }
  }
})
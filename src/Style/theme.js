import { extendTheme } from '@chakra-ui/react'
  
export const customTheme = extendTheme(
    {
      colors: {
        primary: 'tomato',
      },
      fonts: {
        body: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif',
      },

    },
  )
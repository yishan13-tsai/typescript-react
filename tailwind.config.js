/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: '0.75rem', //12
      sm: '0.8rem', //14
      base: '1rem', //16
      lg: '1.25rem', //20
      xl: '1.5rem', //24
      '2xl': '1.75rem', //28
      '3xl': '2rem', //32
      '4xl': '2.5rem', //40
      '5xl': '3rem', //48
    },
    letterSpacing: {
      heading: '0.05em', // tracking-heading
      normal: '0.0875rem', // tracking-normal
    },
    colors: {
      primary: {
        10: '#F7F2EE', //text-primary-10
        40: '#F1EAE4',
        60: '#E1D1C2',
        80: '#D0B79F',
        100: '#BF9D7D',
        120: '#7B6651',
      },
      success: {
        10: '#E8FEE7',
        20: '#BCFBBD',
        100: '#52DD7E',
        120: '#299F65',
      },
      info: {
        10: '#E6FBFE',
        20: '#B1EFFD',
        100: '#3BADEF',
        120: '#1D66AC',
      },
      error: {
        10: '#FDECEF',
        20: '#F5CCD1',
        100: '#DA3E51',
        120: '#C22538',
      },
      neutral: {
        0: '#FFFFFF',
        10: '#F9F9F9',
        40: '#ECECEC',
        60: '#909090',
        80: '#4B4B4B',
        100: '#000000',
        120: '#140F0A',
      },
    },
    extend: {
      lineHeight: {
        heading: '1.2',
        normal: '1.5',
      },
      flexGrow: {
        2: '2',
        3: '3',
      },
    },
    container: {
      center: true,
      margin: '4rem',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

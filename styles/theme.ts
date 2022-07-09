type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: number
  }
  fontWeights: {
    [key: string]: number
  }
  strokeWidth: string
  maxWidth: string
  siteWidth: string
  headerHeight: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: BigIntToLocaleStringOptions
    }
  }
}

const breakpoints: string[] = ['900px','1024px'];

const theme: ThemeShape = {
  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`
  },
  colors: {
    text: '#000105',
    background: '#EFEDEB',
    primary: '#E87414'
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '10rem',
    '12rem',
    '14rem',
    '16rem',
    '18rem',
  ],

  gutter: {
    x: [4],
    y: [4]
  },

  fonts: {
    body: '-apple-system',
    heading: '-apple-system',
    display: '-apple-system',
    code: '-apple-system',
  },

  fontSizes: [
    'var(--text-xs)',
    'var(--text-sm)',
    'var(--text-base-size)',
    'var(--text-md)',
    'var(--text-lg)',
    'var(--text-xl)',
    'var(--text-xxl)',
    'var(--text-xxxl)'
  ],
  
  Heading: {

  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    black: 700,
  },
  strokeWidth: '2px',
  maxWidth: '1680px',
  siteWidth: '50vw',
  headerHeight: '80px',
  grid: {
    gap: '0.5rem',
  },
  transition: {
    all: 'all 0.444s ease-in-out'
  },
  transform: {
    matrix: {
      from: 'matrix(1, 0 , 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0,)'
    }
  },

  border: '1px solid #00000',
  shadow: '0 0.25rem 0.5rem rgb(0, 0, 0, 0.3)',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y',
    font: {
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',

      //Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      //Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    },
    space: {
      
    }
  }
}

export default theme;
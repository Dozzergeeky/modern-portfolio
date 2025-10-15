import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      yellow: '#ffff80',
      pink: '#ff80bf',
      purple: '#9580ff',
      red: '#ff9580',
      orange: '#ffca80',
      green: '#8aff80',
      cyan: '#80ffea',
      primary: '#e8f0ff',
      secondary: '#9fb3d1',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%)',
      backgroundSolid: '#0f1420',
      hover: 'rgba(147, 197, 253, 0.08)',
      command: 'rgba(147, 197, 253, 0.05)',
      glass: 'rgba(20, 30, 60, 0.7)',
      glassHover: 'rgba(30, 50, 90, 0.8)',
      blueTint: 'rgba(59, 130, 246, 0.1)',
    },
    fonts: {
      body: 'Biotif, sans-serif',
      code: 'Fira Code, monospace',
      heading: 'Neuzeit Grotesk Bold, sans-serif',
    },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '110px',
    },
    transitions: {
      duration: '0.2s',
    },
    radii: {
      borderRadius: '8px',
    },
  },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 760px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)',
  },
})

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%)',
    backgroundAttachment: 'fixed',
  },
  kbd: {
    color: '$background',
    background: '$secondary',
    padding: '1px 5px',
    borderRadius: '4px',
    transition: 'background $duration ease-in-out',
    fontFamily: '$code',
    fontSize: '14px',
  },
  svg: {
    width: '32px',
    height: '32px',
    fill: 'white',
  },
  figure: {
    margin: 0,
  },
  twitterwidget: {
    margin: '0 auto',
  },
  code: {
    background: 'rgba(20, 30, 60, 0.6)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(147, 197, 253, 0.1)',
    borderRadius: '$borderRadius',
    color: '$primary',
    fontFamily: '$code',
    fontSize: '15px',
  },
  ':not(pre) > code': {
    padding: '4px',
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '48px',
    lineHeight: '50px',
    margin: '0 0 20px',
    color: '$primary',
  },
  h2: {
    color: '$primary',
    margin: '60px 0 0',
    fontSize: '24px',
  },
  'h3, h3 a': {
    color: '$primary',
    fontSize: '18px',
    margin: '20px 0 0',
  },
  ul: {
    margin: 0,
  },
  img: {
    borderRadius: '8px',
    minWidth: '100%',
    maxWidth: '100%',
  },
  p: {
    margin: '20px 0',
    color: '$secondary',
  },
  strong: {
    color: '$primary',
    fontWeight: 500,
  },
  blockquote: {
    borderLeft: '4px solid rgba(147, 197, 253, 0.5)',
    background: 'rgba(147, 197, 253, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: '$secondary',
    fontStyle: 'italic',
    margin: '0',
    padding: '15px 20px',
    borderRadius: '0 $borderRadius $borderRadius 0',
  },
  a: {
    borderBottom: '.5px solid $secondary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out',
  },
  'a:hover, a:focus': {
    opacity: '0.8',
  },
  '@font-face': [
    {
      fontFamily: 'Neuzeit Grotesk Bold',
      src: `url("/static/font/NeuzeitGrotesk-Bold.woff2") format("woff2"),
        url("/static/font/NeuzeitGrotesk-Bold.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Fira Code',
      src: `url("/static/font/FiraCode-Regular.woff2") format("woff2"),
        url("/static/font/FiraCode-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Bold.woff2") format("woff2"),
        url("/static/font/Biotif-Bold.woff") format("woff")`,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Book.woff2") format("woff2"),
        url("/static/font/Biotif-Book.woff") format("woff")`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Regular.woff2") format("woff2"),
        url("/static/font/Biotif-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-RegularItalic.woff2") format("woff2"),
        url("/static/font/Biotif-RegularItalic.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
})

globalStyles()

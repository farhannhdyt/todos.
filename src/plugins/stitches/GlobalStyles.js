import { globalCss } from '@stitches/react'

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'body': {
    fontFamily: 'Inter, sans-serif'
  },

  '.container': {
    maxWidth: '650px',
    margin: '50px auto',
  },

  '.btn-cta': {
    background: 'unset',
    border: 'unset',
    marginBottom: '20px',
    cursor: 'pointer',
  }
})

export default GlobalStyles
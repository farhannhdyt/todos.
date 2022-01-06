import { styled } from '@stitches/react'

export const Component = styled('header', {
  textAlign: 'center',
  marginBottom: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Heading = styled('h1', {
  fontSize: '50px',
  flex: 2
})

export const Button = styled('button', {
  backgroundColor: 'unset',
  border: '1px solid #999',
  fontSize: '22px',
  display: 'flex',
  alignItems: 'center',
  padding: '5px 8px',
  borderRadius: '4px',
  cursor: 'pointer',
  color: '#999',
  transition: 'all 0.2s ease',

  '&:hover': {
    border: '1px solid #000',
    color: '#000'
  }
})
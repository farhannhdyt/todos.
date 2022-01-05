import { styled } from '@stitches/react'

export const Component = styled('div', {
  marginBottom: '30px',
})

export const Form = styled('form', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 15
})

export const Label = styled('label', {
  fontSize: '18px',
  display: 'inline-block',
  marginBottom: '10px'
})

export const Input = styled('input', {
  width: '100%',
  padding: '12px 15px',
  fontSize: '16px',
  border: '1px solid hsl(0 0% 78.0%)',
  borderRadius: '4px',
  outline: 'none',
})

export const Check = styled('input', {
  appearance: 'checkbox',
  width: 'auto',
  display: 'inline-block'
})

export const Button = styled('button', {
  background: 'transparent',
  color: '#666',
  cursor: 'pointer',
  border: '1px solid #eaeaea',
  borderRadius: '4px',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginTop: '15px',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'all 0.2s ease',

  '&:hover': {
    border: '1px solid #000'
  }
})
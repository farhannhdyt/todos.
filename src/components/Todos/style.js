import { styled } from '@stitches/react'

export const Component = styled('div', {
  maxWidth: '100%',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',

  '&.border-hidden': {
    border: 'unset'
  },

  '&.border-visible': {
    border: '1px solid hsl(0 0% 78.0%)',
  }
})

export const TodoItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid hsl(0 0% 78.0%)',
  padding: '20px',
  cursor: 'pointer',

  '&:last-child': {
    borderBottom: 'unset'
  },
})

export const TodoContent = styled('div', {
  flex: 1,
  marginLeft: '15px'
})

export const Title = styled('h3', {
  fontSize: '18px',
  fontWeight: '500',
  color: '#000',
  transition: 'all 0.2s ease',

  '&.todo-text-reminder': {
    color: '#999'
  }
})

export const TodoDay = styled('span', {
  color: '#666',
  transition: 'all 0.2s ease',
  
  '&.todo-text-reminder': {
    color: '#999'
  }
})

export const Button = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

export const Image = styled('img', {
  transition: 'all 0.2s ease',

  '&.image-hidden': {
    opacity: 0,
    visibility: 'hidden'
  },

  '&.image-visible': {
    opacity: 1,
    visibility: 'visible'
  }
})
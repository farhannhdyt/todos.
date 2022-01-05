import { useState } from 'react'
import { Component, Input, Form, Label, Check, Button } from "./style"

const AddTodo = ({ onAdd }) => {
  const [ text, setText ] = useState('')
  const [ day, setDay ] = useState('')
  const [ reminder, setReminder ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add text!')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <Component>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>Todo Title</Label>
          <Input type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <Label>Date & Time</Label>
          <Input type="text" placeholder="When will it be done?" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div>
          <Check type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} /> <label>Set reminder</label>
        </div>

        <Button>Save Todo</Button>
      </Form>
    </Component>
  )
}

export default AddTodo
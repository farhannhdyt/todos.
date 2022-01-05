import { useState, useEffect } from 'react'
import { PlusImage, CloseImage } from './assets'
import { AddTodo, Footer, Header, Todos } from "./components"
import { GlobalStyles } from "./plugins"

const App = () => {
  const [ showAddTodo, setShowAddTodo ] = useState(false)
  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const fetchedTodos = await fetchTodos()
      setTodos(fetchedTodos)
    }

    getTodos()
  }, [])

  // Fetch todos
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/todos")
    const data = await res.json()

    return data
  }
  
  // Fetch todo
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
  }

  // Add todo
  const addTodo = async (todo) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTodo = { id, ...todo }
    // setTodos([ newTodo, ...todos ])

    const res = await fetch(`http://localhost:5000/todos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    const newData = await res.json()
    setTodos([...todos, newData])
  }

  // Delete action
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE'
    })

    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const todoToToggle = await fetchTodo(id)
    const updatedTodo = { ...todoToToggle, reminder: !todoToToggle.reminder }

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })

    const newData = await res.json()

    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, reminder: newData.reminder } : todo)
    )
  }

  // Global style from stitches
  GlobalStyles()
  
  return (
    <div className="container">
      <Header />
      <button className='btn-cta' onClick={() => setShowAddTodo(!showAddTodo)} title="Add Todo">
        { showAddTodo ? (<img src={CloseImage} />) : (<img src={PlusImage} />) }
      </button>

      {showAddTodo && <AddTodo onAdd={addTodo} />}
      <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} />

      <Footer />
    </div>
  )
}

export default App
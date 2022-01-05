import { Component } from './style'
import Todo from './Todo'

const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <Component className={todos.length > 0 ? 'border-visible' : 'border-hidden'}>
      { todos.length > 0 ? todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      )) : (<p style={{ color: '#666', textAlign: 'center' }}>No todos to show</p>) }
    </Component>
  )
}

export default Todos
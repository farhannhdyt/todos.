import { CloseImage, CheckImage } from '../../../assets'
import { Button, Title, TodoContent, TodoDay, TodoItem, Image } from '../style'

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <TodoItem onDoubleClick={() => onToggle(todo.id)}>
      <Image src={CheckImage} className={todo.reminder ? 'image-visible' : 'image-hidden'} />
      <TodoContent>
        <Title className={todo.reminder ? 'todo-text-reminder' : ''}>{todo.text}</Title>
        <TodoDay className={todo.reminder ? 'todo-text-reminder' : ''}>{todo.day}</TodoDay>
      </TodoContent>
      <Button onClick={() => onDelete(todo.id)}>
        <img src={CloseImage}/>
      </Button>
    </TodoItem>
  )
}

export default Todo
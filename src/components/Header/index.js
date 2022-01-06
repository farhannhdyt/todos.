import { Component, Heading, Button } from "./style"
import { FiPlus, FiX } from "react-icons/fi"
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAddTodo }) => {
  return (
    <Component>
      <Heading>{title}</Heading>
      <Button onClick={onAdd}>
        { showAddTodo ? (<FiX />) : (<FiPlus />) }
      </Button>
    </Component>
  )
}

Header.defaultProps = {
  title: 'todos.'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
import { Component, Heading } from "./style"
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <Component>
      <Heading>{props.title}</Heading>
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
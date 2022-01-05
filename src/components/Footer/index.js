import { Component, Text } from "./style"

const Footer = () => {
  return (
    <Component>
      <Text>Double-click to set the reminder</Text>
      <Text>&copy; todos. {new Date().getFullYear()}</Text>
    </Component>
  )
}

export default Footer
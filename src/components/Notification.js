
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: 'none'
  }
  
  const notification = useSelector(( {anecdotes, notification }) => {
    const findAnecdoteContent = () => anecdotes.find(anecdote => anecdote.id === notification.id).content

    console.log('Notice Received: ', notification)
    if (notification && notification.id) {
      style.display = ''
      switch(notification.type) {
        case 'VOTE':
          return `you voted '${anecdotes.find(anecdote => anecdote.id === notification.id).content}'`
        case 'NEW_ANECDOTE':
          console.log('should print new anecdote')
          return `you created '${findAnecdoteContent()}`
        default:
          return ''
      } 
      
      
    }
    return ''
  })

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
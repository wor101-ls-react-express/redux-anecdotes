import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'

const filterAnecdotes = (filter, anecdotes) => {
  return anecdotes.filter(anecdote => anecdote.content.includes(filter))
}


const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ 
      type: 'VOTE',
      id: id, 
    })
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <div>
      {filterAnecdotes(filter, anecdotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
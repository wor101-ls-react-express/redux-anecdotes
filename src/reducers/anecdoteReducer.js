const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const sortByVotes = (anecdotes) => {
  return anecdotes.sort((item1, item2) => item2.votes - item1.votes)
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: content,
      id: getId(),
      votes: 0,
    }
  }
}

const anecdoteReducer = (state = sortByVotes(initialState), action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      let updatedAnecdotes = state.map(object => {
        if (object.id === action.id) {
          let newObject = {
                ...object,
                votes: object.votes + 1,
              }
          console.log('New Object: ', newObject)
          return newObject
        }
        return {...object}
      })
      return sortByVotes(updatedAnecdotes)
    case 'NEW_ANECDOTE':
      return sortByVotes([...state, action.data])
    default:
      return state
  }

}

export default anecdoteReducer
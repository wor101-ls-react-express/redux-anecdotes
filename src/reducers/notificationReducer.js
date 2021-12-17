export const clearNotification = () => {
  return { type: 'CLEAR_NOTIFICATION' }
}

const notificationReducer = ( state = null, action) => {
  switch (action.type) {
    case 'VOTE':
      return {
        type: 'VOTE',
        id: action.id,
      }
    case 'NEW_ANECDOTE':
      return {
        type: 'NEW_ANECDOTE',
        id: action.data.id,
      }
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer
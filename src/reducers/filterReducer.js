export const createFilter = (content) => {
  return {
    type: 'FILTER',
    content: content,
  }
}


const filterReducer = (state = '', action) => {
  console.log('Filter state: ', state)

  switch(action.type) {
    case 'FILTER':
      console.log('Current Filter: ', action.content)
      return action.content
    default:
      return state
  }
}

export default filterReducer
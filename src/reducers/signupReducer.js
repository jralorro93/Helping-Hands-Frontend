const initialState = {
  users: []
}


export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state.users, user: action.payload}
    default:
      return state
  }
}
export default signupReducer

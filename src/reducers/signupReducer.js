export const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload
    default:
      return state
  }
}
export default signupReducer
//GOTTA CHANGE THIS FILE

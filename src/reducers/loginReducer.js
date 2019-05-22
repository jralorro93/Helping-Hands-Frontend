const initialState = {
  user: {}
}


export const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.payload.user}
    case 'LOGOUT_USER':
      return {...state, user: {}}
    default:
      return state
  }
}
export default loginReducer

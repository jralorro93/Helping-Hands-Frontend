const initialState = {
  user: {}
}


export const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.payload.user}
    default:
      return state
  }
}
export default loginReducer

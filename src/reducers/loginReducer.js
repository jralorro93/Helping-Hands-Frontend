const initialState = {
  user: {}
}


export const loginReducer = (state = initialState, action) => {
  console.log('this is action: ', action)

  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.payload.user}
    case 'LOGOUT_USER':
      return {...state, user: {}}
    case 'ADD_BOOKING':
      return {...state, user: {...state.user, appointments: [...state.user.appointments, action.payload]}}
    case 'DELETE_BOOKING':
      return {...state, user: {...state.user, appointments: state.user.appointments.filter(appointment => appointment !== action.payload)}}
    case 'EDIT_IMAGE':
      return {...state, user: {...state.user, imgUrl: action.payload}}
    case 'EDIT_INFO':
      return {...state, user: {
        ...state.user,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        password: action.payload.password
      }}
    default:
      return state
  }
}
export default loginReducer

const initialState = {
  user: {}
}


export const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.payload.user}
    case 'LOGOUT_USER':
      return {...state, user: {}}
    case 'ADD_BOOKING':
      return {...state, user: {...state.user, appointments: [...state.user.appointments, action.payload]}}
    case 'DELETE_BOOKING':
      return {...state, user: {...state.user, appointments: state.user.appointments.filter(appointment => appointment !== action.payload)}}
    default:
      return state
  }
}
export default loginReducer

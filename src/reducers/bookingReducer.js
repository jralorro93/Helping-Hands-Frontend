const initialState = {
  appointments: []
}

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      console.log('this is bookingReducer: ', action.payload)
      return {...state, appointments: [...state.appointments, action.payload] }
    case 'DELETE_BOOKING':
      return {...state, appointments: state.appointments.filter(appointment => appointment !== action.payload)}
    default:
      return state
  }
}
export default bookingReducer

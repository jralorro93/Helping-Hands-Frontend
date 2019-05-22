const initialState = {
  appointments: []
}

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return {...state, appointments: action.payload }
    default:
      return state
  }
}
export default bookingReducer

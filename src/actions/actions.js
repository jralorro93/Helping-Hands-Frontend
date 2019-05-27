// ACTIONS
export const addUser = (newUserObj) => {
  return {type: "LOGIN_USER", payload: newUserObj}
}
export const logoutUser = () => {
  return {type: "LOGOUT_USER"}
}


// THUNK
//CREATES NEW USER FOR SIGNUP
export const postUser = (user, history) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `BEARER ${localStorage.getItem('token')}`
       },
       body: JSON.stringify({user: {
         first_name: user.first_name,
         last_name: user.last_name,
         password: user.password,
         email: user.email,
         role: user.selectedOption
       }})
     })
     .then(r => r.json())
     .then(user => {
       //Needs working for rerouting
       dispatch(addUser(user))
       localStorage.setItem('token', user.jwt)
       if (user.user.role === "client")  {
         history.push('/clientProfile')
       } else {
         history.push('/spProfile')
       }
     })
  }
}

//KEEPS USER LOGGED IN
export const loginUserFromToken = token => dispatch => {
  fetch('http://localhost:3000/api/v1/reauthorized', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `BEARER ${token}`
    }
  }).then(r => r.json())
    .then(user => dispatch(addUser(user)))
}

//Logs-in User with token
export const loginUser = (user, history) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {
        email: user.email,
        password: user.password,
      }})
    })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      dispatch(addUser(user))

      if (user.user.role === "client")  {
        history.push('/clientProfile')
      } else {
        history.push('/spProfile')
      }
    })
  }
}


//Gets services from api/v1/services
export const getServices = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/services')
      .then(r => r.json())
      .then(services => dispatch({type: "GET_SERVICES", payload: services}))
  }
}

//Posts a booking to api/v1/bookings
export const postBooking = (selectedSP, dateAndTime, clientId) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        service_id: selectedSP,
        client_id: clientId,
        date: dateAndTime.date,
        time: dateAndTime.time
      })
    }).then(r => r.json())
      .then(newBooking => dispatch({type: "ADD_BOOKING", payload: newBooking}))
  }
}

// ACTIONS
export const addUser = (newUserObj) => {
  return {type: "LOGIN_USER", payload: newUserObj}
}
export const logoutUser = () => {
  return {type: "LOGOUT_USER"}
}

export const deleteBooking = (booking) => {
  return {type: "DELETE_BOOKING", payload: booking }
}

export const editImage = image => {
  return {type: "EDIT_IMAGE", payload: image}
}

export const editInfo = info => {
  return {type: 'EDIT_INFO', payload: info}
}
export const editAppt = info => {
  return {type: 'EDIT_INFO', payload: info}
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

//DELETES A BOOKING
export const deleteBookingRequest = (appt) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/bookings/${appt.id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(appt)
    }).then(r => dispatch(deleteBooking(appt)))
  }
}

//EDIT IMAGE
export const patchImageUrl = (imgUrl, id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({imgUrl: imgUrl})
    }).then(r => r.json())
      .then(data => dispatch(editImage(imgUrl)))
  }
}

//EDIT PERSONAL INFO
export const patchUserInfo = (id, firstName, lastName, email, password) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      })
    }).then(r => r.json())
      .then(data => dispatch(editInfo({first_name: firstName, last_name: lastName, email: email, password: password})))
  }
}

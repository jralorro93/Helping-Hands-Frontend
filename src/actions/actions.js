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

export const getSPInfo = info => {
  return {type: 'GETSP_INFO', payload: info}
}

export const addJob = info => {
  return {type: 'ADD_JOB', payload: info}
}


// THUNK
//CREATES NEW USER FOR SIGNUP: Client
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
         role: user.role
       }})
     })
     .then(r => r.json())
     .then(user => {
       console.log('this is new user: ', user)
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


//CREATES NEW USER FOR SIGN UP: SP
// export const postUserSP = () => {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({user: {
//
//       }})
//     })
//   }
// }

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
    .then(user => {
      console.log(user)
      dispatch(addUser(user))
    })
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

//EDIT APPOINTMENT
export const patchAppt = (id, date, time) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        date: date,
        time: time
      })
    }).then(r => r.json())
      .then(data => dispatch(editAppt({date: date, time: time})))
  }
}


//PATCH SERVICES FOR SP
export const patchServiceSP = (id, service) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({services: service})
    }).then(r => r.json())
      .then(data => {
        console.log('this is new job data: ', data)

      })

  }
}

//POST SERVICES
// export const postJob = (id, newService) => {
//   return (dispatch) {
//     return fetch(`http://localhost:3000/api/v1/services`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         job: newService.job,
//         price: newService.price,
//         availability: newService.availability,
//       })
//     })
//   }
// }

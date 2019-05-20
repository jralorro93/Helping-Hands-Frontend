// ACTIONS
export const addUser = (newUserObj) => {
  return {type: "ADD_USER", payload: newUserObj}
}


// THUNK
//CREATES NEW USER FOR SIGNUP
export const postUser = (user) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
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
     .then(user => console.log(user) || dispatch(addUser(user)))
  }
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
      dispatch({type: 'LOGIN_USER', payload: user })
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

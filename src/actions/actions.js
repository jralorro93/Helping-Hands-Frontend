// ACTIONS
export const addUser = (newUserObj) => {
  return {type: "ADD_USER", payload: newUserObj}
}


// THUNK
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
     .then(res => console.log(res) || dispatch(addUser(res)))
  }
}

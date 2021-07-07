import client from '../../store/modules/client'

// User Guard: Checks the user if he is logged in - Überprüft den user ob er eingelogt ist
export default function userGuard(to, from, next) {
  let token = localStorage.getItem('token');
  if (token && client.state.getToken !== '') {
    next()
  } else {
    next({name: 'signin'})
  }
}





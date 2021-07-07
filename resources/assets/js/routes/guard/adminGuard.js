import client from '../../store/modules/client'



export default function userGuard(to, from, next) {
  let token = localStorage.getItem('token');
  if (token && client.state.token !== '' && client.state.userStatus === 'admin') {
    next()
  } else {
    next({name: 'dashboard'});
  }
}






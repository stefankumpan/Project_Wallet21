export default function guestGuard(to, from, next) {

  let token = localStorage.getItem('token');

  if (token === null || token === '') {
    next()
  } else {
    next({name: 'dashboard'})
  }

}


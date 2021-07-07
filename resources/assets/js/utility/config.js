export const AppTitle = process.env.MIX_APP_NAME + ': '; // APP Name .env
export const AppUrl = process.env.MIX_APP_URL;  //URL .env
export const AppDebug = process.env.MIX_APP_DEBUG;  //Debug .env

export const AuthHeader = {
  'Authorization': localStorage.getItem('token'),
};


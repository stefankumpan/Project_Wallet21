import axios from 'axios';


//axios BaseURL to App URL  - Axios BaseURL zu App URL
const exchangeratesapi = new axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
});

export default exchangeratesapi;

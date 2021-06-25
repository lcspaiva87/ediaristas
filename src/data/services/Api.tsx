import axios from 'axios';

const url = 'https://rocky-chamber-61000.herokuapp.com/'

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})

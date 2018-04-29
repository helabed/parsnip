import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export function fetchTasks() {
  console.log('api.index.js.fetchTasks - client.get dispatched');
  return client.get('/tasks');
}

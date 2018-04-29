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

export function createTask(params) {
  console.log('api.index.js.createTask - client.post dispatched');
  return client.post('/tasks', params);
}

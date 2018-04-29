import axios from 'axios';

let _id = 1;

export function uniqueId() {
  return _id++;
}

export function createTask({ title, description }) {
  console.log('actions.index.js.createTask: { title, description }', { title, description });
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted',
    },
  };
}

export function editTask(id, params={}) {
  console.log('actions.index.js.editTask:  id, params ',  id, params );
  return {
    type: 'EDIT_TASK',
    payload: {
      id,
      params,
    },
  };
}

export function fetchTasks() {
  console.log('actions.index.js.fetchTasks' );
  return dispatch => {
    axios
      .get('http://localhost:3001/tasks')
      .then( resp => {
        dispatch(fetchTasksSucceded(resp.data));
        console.log('actions.index.js.fetchTasks - response dispatched - data: ', resp.data );
      });
  }
}

export function fetchTasksSucceded(tasks) {
  console.log('actions.index.js.fetchTasksSucceded - data: ', tasks );
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

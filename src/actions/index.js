import * as api from '../api';

function createTaskSucceeded(task) {
  console.log('actions.index.js.createTaskSucceeded - task: ', task );
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: { task },
  };
}

export function createTask({ title, description, status = 'Unstarted' }) {
  console.log('actions.index.js.createTask: { title, description }', { title, description });
  return dispatch => {
    api.createTask({title, description, status}).then( resp => {
      dispatch(createTaskSucceeded(resp.data));
      console.log('actions.index.js.createTask - response dispatched - data: ', resp.data );
    });
  }
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
    api.fetchTasks().then( resp => {
      dispatch(fetchTasksSucceded(resp.data));
      console.log('actions.index.js.fetchTasks - response dispatched - data: ', resp.data );
    });
  }
}

export function fetchTasksSucceded(tasks) {
  console.log('actions.index.js.fetchTasksSucceded - tasks: ', tasks );
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

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
      console.log('actions.index.js.createTask - response dispatched - data: ', resp.data );
      dispatch(createTaskSucceeded(resp.data));
    });
  }
}


function editTaskSucceeded(task) {
  console.log('actions.index.js.editTaskSucceeded - responseData: ', task );
  return {
    type: 'EDIT_TASK_SUCCEEDED',
    payload: { task },
  };
}

export function editTask(id, params={}) {
  console.log('actions.index.js.editTask:  id, params ',  id, params );
  return (dispatch, getState) => {
    console.log('actions.index.js.editTask.dispatch_function:  state ',  getState() );
    const task = getTaskById(getState().tasks, id);
    const updatedTask = Object.assign({}, task, params);  // merge new props into existing object.

    api.editTask(id, updatedTask).then( resp => {
      console.log('actions.index.js.editTask - response dispatched - data: ', resp.data );
      dispatch(editTaskSucceeded(resp.data));
    });
  }
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}


export function fetchTasks() {
  console.log('actions.index.js.fetchTasks' );
  return dispatch => {
    api.fetchTasks().then( resp => {
      console.log('actions.index.js.fetchTasks - response dispatched - data: ', resp.data );
      dispatch(fetchTasksSucceeded(resp.data));
    });
  }
}

export function fetchTasksSucceeded(tasks) {
  console.log('actions.index.js.fetchTasksSucceeded - tasks: ', tasks );
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

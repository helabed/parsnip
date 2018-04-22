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

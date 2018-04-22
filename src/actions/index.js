let _id = 1;

export function uniqueId() {
  return _id++;
}

export function createTask({ title, description }) {
  console.log('actions.index.js.tasks: { title, description }', { title, description });
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

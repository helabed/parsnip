export default function tasks(state = { tasks: [] }, action) {
  console.log('reducers.index.js.tasks: state', state);
  console.log('reducers.index.js.tasks: action', action);

  switch (action.type) {

    case 'CREATE_TASK': {
      return { tasks: state.tasks.concat(action.payload) };
    }

    case 'EDIT_TASK': {
      const { payload } = action;
      console.log('reducers.index.js.EDIT_TASK: payload', payload);
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      }
    }

    case 'FETCH_TASKS_SUCCEEDED': {
      return { tasks: action.payload.tasks, }
    }

    case 'CREATE_TASK_SUCCEEDED': {
      return { tasks: state.tasks.concat(action.payload.task) };
    }

    case 'EDIT_TASK_SUCCEEDED': {
      const { payload } = action;
      console.log('reducers.index.js.EDIT_TASK_SUCCEEDED: payload', payload);
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.task.id) {
            console.log('reducers.index.js.EDIT_TASK_SUCCEEDED: found IT - task: ', payload.task);
            return payload.task;
          } else {
            console.log('reducers.index.js.EDIT_TASK_SUCCEEDED: returning - task: ', task);
            return task;
          }
        }),
      }
    }

    default: {
      return state
    }
  }
}

// import { uniqueId } from '../actions';

// const mockTasks = [ // #A
//   {
//     id: uniqueId(),
//     title: 'Learn Redux',
//     description: 'The store, actions, and reducers, oh my!',
//     status: 'In Progress',
//   },
//   {
//     id: uniqueId(),
//     title: 'Peace on Earth',
//     description: 'No big deal.',
//     status: 'In Progress',
//   },
// ];

// export default function tasks(state = { tasks: mockTasks }, action) {
export default function tasks(state = { tasks: [] }, action) {
  console.log('reducers.index.js.tasks: state', state);
  console.log('reducers.index.js.tasks: action', action);

  if (action.type === 'CREATE_TASK') {
    return { tasks: state.tasks.concat(action.payload) };
  }

  if (action.type === 'EDIT_TASK') {  // #A
    const { payload } = action;
    return {
      tasks: state.tasks.map(task => {  // #B
        if (task.id === payload.id) {
          return Object.assign({}, task, payload.params);  // #C
        }
        return task;
      })
    }
  }

  if (action.type === 'FETCH_TASKS_SUCCEEDED') {
    return {
      tasks: action.payload.tasks,
    }
  }

  return state
}

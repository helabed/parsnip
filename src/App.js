import React, { Component } from 'react';
import TasksPage from './components/TasksPage';
// import { connect } from 'react-redux'

const mockTasks = [ // #A
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
];

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={mockTasks} />
      </div>
    );
  }
}
// export default App;

// function mapStateToProps(state) { //#C
//   return {
//     tasks: state.tasks  //#D
//   }
// }
// export default connect(mapStateToProps)(App);
export default App;

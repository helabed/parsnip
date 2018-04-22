import React, { Component } from 'react';
import TasksPage from './components/TasksPage';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) { //#C
  return {
    tasks: state.tasks  //#D
  }
}
export default connect(mapStateToProps)(App);
// export default App;

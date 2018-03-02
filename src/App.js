import React, { Component } from 'react';
import './App.css';
import AddTodoContainer from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoContainer />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;

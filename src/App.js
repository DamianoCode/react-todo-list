import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      task: "",
    };
  }
  addNewTask = () => {
    this.setState(({ list, task }) => ({
      list: [
        ...list,
        {
          task,
        },
      ],
      task: "",
    }));
  };
  handleInput = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  deleteItem = (indexToDelete) => {
    this.setState(({ list }) => ({
      list: list.filter((task, index) => index !== indexToDelete),
    }));
  };

  render() {
    return (
      <div className="ToDo">
        <h1 className="ToDo-Header">React To Do</h1>
        <div className="ToDo-Container">
          <div>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleInput}
            />
            <button className="ToDo-Add" onClick={this.addNewTask}>
              +
            </button>
          </div>
          <div className="ToDo-Content">
            {this.state.list.map((item, key) => {
              return (
                <ToDoItem
                  key={key}
                  item={item.task}
                  deleteItem={this.deleteItem.bind(this, key)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

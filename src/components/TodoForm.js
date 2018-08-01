import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = (event) => {
    let todoValue = event.target.value;
    this.setState({ input: todoValue });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let value = this.state.input;
    this.props.addTodo(value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.TodoForm} >
        <label>
          Add Task:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="btn btn-danger" />
      </form>
    );
  }
}

export default TodoForm;
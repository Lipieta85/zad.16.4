import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';

const data = [{
	id: 1,
	text: 'clean room'
}, {
	id: 2,
	text: 'wash the dishes'
}, {
	id: 3,
	text: 'feed my cat'
}];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [...data]
        };
    }
    addTodo = (val) => {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo = (id) => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="ToDo App" number={this.state.data.length}></Title> 
                <TodoList list={this.state.data} remove={this.removeTodo} />
            </div>
        );
    }
}


export default hot(module)(App);
import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    const listElement = props.list.map(element =>
        <li onClick={() => props.remove(element.id)}>
            {element.text}
        </li>
    );
    return (
        <ul className={style.TodoList}>
            {listElement}
        </ul>
    )
}

export default TodoList;

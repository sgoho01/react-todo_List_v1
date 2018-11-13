import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TodoLi = (props) => {
    const onClickRemovedBtn = () => {
        props.handleRemovedData(props.todo);
    }
    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemovedBtn}>삭제</a>
            </span>
        </li>
    );
};

TodoLi.propTypes = {
    todo: PropTypes.string
}

export default TodoLi;

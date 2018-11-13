import React, {Component} from 'react';
import PropTypes from 'prop-types';

const AddLi = (props) => {
    let inputBox;

    const onClickAddBtn = () => {
        props.handleAddedData(inputBox.value);
        inputBox.value = '';
        inputBox.focus();
    };

    return (
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={input => inputBox = input} />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={onClickAddBtn}>등록</button>
            </span>
        </div>
    );
}

AddLi.propTypes = {
    handleAddedData: PropTypes.func.isRequired
}

export default AddLi;

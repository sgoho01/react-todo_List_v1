import React, {Component} from 'react';

import Title from '../components/Title';
import AddLi from '../components/AddLi';
import TodoLi from '../components/TodoLi';

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            text : '',
            todos : [
            ]
        };
        this.handleAddedData = this.handleAddedData.bind(this);
        this.handleRemovedData = this.handleRemovedData.bind(this);
    }

    componentWillMount(){
        // 마운트 시작 전
        console.log('componentWillMount');
    }

    componentDidMount(){
        // ajax 사용
        // axions, $.ajax()
        const text = 'To do list !';
        const todos = [
          "이것도 해야 되고",
          "저것도 해야 되고",
          "그것도 해야 되고",
          "언제 다 하나"
        ];

        // this.setState(); => 자동으로 render 실행
        this.setState((prevState) => ({text, todos}));

        console.log('componentDidMount');
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    componentWIllUpdate(){
        // 업데이트 시작 전
        console.log('componentWIllUpdate');
    }

    componentDidUpdate(){
        // 업데이트 끝
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleAddedData(text){
        this.setState(({todos}) => {
            todos.push(text);
            return {todos};
        })
    }

    handleRemovedData(text){
        this.setState((prevState) => {
            const todos = prevState.todos;
            const idx = todos.indexOf(text);
            todos.splice(idx, 1);

            return {todos};
        })
    }

    render(){
        const todoLi = this.state.todos.map((todo, i) => {
            return <TodoLi todo={todo} key={'todo' + i} handleRemovedData={this.handleRemovedData} />
        });

        return(
            <div className="container">
                <Title text={this.state.text}/> {/* new Title(); */}
                <AddLi handleAddedData={this.handleAddedData}/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Todo;

import React, { Component } from 'react';
import { connect } from "react-redux"
import {addTodo,deleteTodo,removeTodo} from '../actions/index';

class TodoClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputData: ''
        }
    }
        

    render() {
        // const [arr] = this.props.todos
        console.log(this.props.todos);
        return (
            <>
                <div className='main-div' >
                    <div className='child-div'>
                        <figure>
                            <figcaption>Add your list here</figcaption>
                        </figure>

                        <div className='addItems'>

                            <input type="text" placeholder="Add items" 
                                onChange={(event) => this.setState(event.target.value) } />

                            <button onClick={this.props.addTodo(this.inputData)}>ADD</button>

                        </div>        

                    <div className='showItems'>

                        {
                            this.props.todos.map( (elem) => {
                                return(
                                    <div className='eachItem' key={elem.id} >
                                    <h3>{elem.data}</h3>
                                    <button onClick={this.props.deleteTodo(elem.id)} >Del</button>
                                </div>
                                )                
                            })
                        }
                        
                    </div>

                    <div className='showItems'>
                        <button onClick={this.props.removeTodo()} >Checklist</button>
                    </div>

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       todos: state.toDoReducer
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        addTodo: todos => dispatch(addTodo(todos)),
        deleteTodo: id => dispatch(deleteTodo(id)),
        removeTodo: () => dispatch(removeTodo()),
      }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoClass) ;
// export default connect(mapStateToProps, mapDispatchToProps, { addTodo,deleteTodo,removeTodo })(TodoClass) ;
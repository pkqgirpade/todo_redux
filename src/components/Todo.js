import React, { useState } from 'react';
import {addTodo,deleteTodo,removeTodo} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import './todo.css';
const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector( (state) => state.toDoReducer.list );
    const dispatch = useDispatch();
  return (
    <>
      <div className='main-div' >
        <div className='child-div'>
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>

        <div className='addItems'>

          <input type="text" placeholder="Add items" value={inputData}
          onChange={ (event) => setInputData(event.target.value) } />

          <button onClick={ () => dispatch(addTodo(inputData), setInputData('')) }>ADD</button>

        </div>        

        <div className='showItems'>

        {
            list.map( (elem) => {
                return(
                    <div className='eachItem' key={elem.id} >
                    <h3>{elem.data}</h3><button onClick={ () => dispatch(deleteTodo(elem.id)) } >Del</button>
                </div>
                )                
            })
        }
            
        </div>

        <div className='showItems'>
          <button onClick={ () => dispatch(removeTodo()) } >Checklist</button>
        </div>

        </div>
      </div>
    </>
  );
};

export default Todo;
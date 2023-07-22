import logo from './logo.svg';
import './App.css';
import Todoinput from './Components/Todoinput'
import { useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
 
  const [listTodo, setListTodo] = useState([]);

  let addList =(inputText) =>{
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <>
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList ={addList}/>
        <div className="app-heading">TO DO</div>
        <hr />{
          listTodo.map((listItem,i) =>{
            return(
              <>
               <TodoList key = {i} index ={i}  item= {listItem} deleteItem = {deleteListItem}/>
              </>
            )
          })
        }
      </div>
    </div>
    </>
  );
}

export default App;

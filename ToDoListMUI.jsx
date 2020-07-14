import React ,{useState}from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoListMUIComp from './ToDoListMUIComp'

function ToDoListMUI(){

    const [item, setItem]=useState("");
    const [newitem,setNewItem]=useState([]);

   function itemEvent(event){
        setItem(event.target.value);
    }

    const addItem=()=>{
        setNewItem((prevValue)=>
        {
         return [...prevValue,item];
        });
        setItem("");
    }

return(
    <div className='main_div'>
        <div className='center_div'>
            <h1>TO DO List</h1>
            <input type='text' placeholder='Add an items' value={item} onChange={itemEvent}></input>
            <Button  className="newBtn" onClick={addItem}>
            <AddIcon />
            </Button>


            <ol>
                {
                newitem.map((curval,index)=>{
                return <ToDoListMUIComp key={index} text={curval}/>
                })
            }
            </ol>
        </div>
    </div>

);



}
export default ToDoListMUI;
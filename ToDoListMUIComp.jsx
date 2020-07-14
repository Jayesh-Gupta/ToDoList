import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoListMUIComp(props){

    const[line,setLine]=useState(false);
    const cutIt=()=>{
        if(!line)
        setLine(true);
        else{setLine(false);}


    }

    return(
        <div className='todo_style'>
            <DeleteIcon className='deleteIcon' onClick={cutIt}/>
    <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
    </div>
    );
}

export default ToDoListMUIComp;
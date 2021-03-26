
import React,{useState} from 'react';
import Items from './items'
function Form()
{
  const [item,setItem]=new useState('');
  function writeItem(event)
  {
      setItem(event.target.value);
  }
  const[items,addItem]=useState([]);
  function Add()
  {
       addItem(preItem=>
         [...preItem,item]
        );
        setItem('');
  }
  function deleteItem(Id)
  {
    //console.log(Id);
   addItem(prevItem=>{
     return prevItem.filter(
       (itm,index)=>
       {
         return index!==Id;
       }
     )
   })
  }
  return(
    <div>
     <input onChange={writeItem} type="text" value={item} placeholder="Enter an item"/>
      <input type="submit" onClick={Add} />
      <div className="items">
        <ul>
      {items.map((item,index)=>
        {
          return <li key={index}>
             <Items  val={item} id={index} onDel={deleteItem} />
            </li>;
        })}
        </ul>
        </div>
      </div>
  )

}

export default Form;
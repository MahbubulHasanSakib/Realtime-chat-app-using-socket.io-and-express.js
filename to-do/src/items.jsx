import React from 'react';

function Items(props)
{
  return(
    <h4 onClick={()=>props.onDel(props.id)}>{props.val}</h4>
  )
}

export default Items;
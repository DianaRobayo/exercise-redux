import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../redux/slice';


export const User = () => {

  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  
  const handleSetName = () => {
    const newName = prompt("Enter your name: ");
    dispatch(setName(newName));
  };

  return (
    <div>
      <h1>User: {name} </h1>
      <div>
        <button className='btn btn-danger' onClick={handleSetName}> Set name </button>
      </div>
    </div>
  )
}

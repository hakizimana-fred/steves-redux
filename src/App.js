import React, {useState } from 'react'
import './App.css';
import {  useSelector, useDispatch } from 'react-redux'
import { userAction } from '.';

function App() {
  const name = useSelector(state => state.user.name)
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const onChange = (e) => setUserName(e.target.value)

  

  return (
    <div className="App">
      <h3>Hello my name is {name} </h3>
      <input type="text"  value={userName} onChange={onChange} />
      <button onClick={() => dispatch(userAction(userName))}>Change Name</button>

    </div>
  );
}

export default App;

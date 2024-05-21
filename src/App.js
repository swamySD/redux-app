import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ages } from './store/reducer';
import './App.css';
import Header from './components/Header';
import Posts from './components/posts';

function App() {
const [name,setName]=useState('')
const [age,setAge]=useState('')
  const dispatch=useDispatch()
  
  // const handleSumbit=()=>{
  //   dispatch({type:'USER_NAME',payload:name})
  // }
 
 
   
  const handleSumbitAge=()=>{
    dispatch(ages(age))
    dispatch({type:'USER_NAME',payload:name})
  }


  return (
    <div className="App">
      <Posts/>
      <Header/>
      <div style={{height:'60px',width:'300px'}}>
        <input type='text' onChange={(e)=>setName(e.target.value)} value={name} />
        <input type='number' onChange={(e)=>setAge(e.target.value)} value={age} />
        {/* <button type='submit' onClick={handleSumbit}>Submit</button> */}
        <button type='submit' onClick={handleSumbitAge}>Submit</button>
      </div>
    </div>
  );
}

export default App;

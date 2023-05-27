// //import logo from './logo.svg';
// import './App.css';
// import Calculator from './component/Calculator';

// function App() {
//   return (
//   <>
//  <div>
//   <Calculator/>
//  </div>
//   </>


// );
// }
// export default App;
import React, {useState} from 'react'
import './App.css';
export default function Calculator() {
 const [result, setresult] = useState("");
 const clickhandler =(event)=>{
    setresult(result.concat(event.target.value))
 }
 const cleardisplay =()=>{
    setresult("")
 }
 const calculate=()=>{
    setresult(eval(result).toString());
 }

  return (
    <div className='cal'>
    <input type='text' placeholder="0" id="answer" value={result}/>
    <input type="button" value="9" className='button' onClick={clickhandler}/>
    <input type="button" value="8" className='button' onClick={clickhandler}/>
    <input type="button" value="7" className='button' onClick={clickhandler}/>
    <input type="button" value="6" className='button' onClick={clickhandler}/>
    <input type="button" value="5" className='button' onClick={clickhandler}/>
    <input type="button" value="4" className='button' onClick={clickhandler}/>
    <input type="button" value="3" className='button' onClick={clickhandler}/>
    <input type="button" value="2" className='button' onClick={clickhandler}/>
    <input type="button" value="1" className='button' onClick={clickhandler}/>
    <input type="button" value="0" className='button' onClick={clickhandler}/>
    <input type="button" value="-" className='button' onClick={clickhandler}/>
    <input type="button" value="+" className='button' onClick={clickhandler}/>
    <input type="button" value="*" className='button' onClick={clickhandler}/>
    <input type="button" value="/" className='button' onClick={clickhandler}/>
    <input type="button" value="%" className='button' onClick={clickhandler}/>
    <input type="button" value="clear" className=' button button1' onClick={cleardisplay}/>
    <input type="button" value="=" className=' button button1' onClick={calculate}/>


    </div>
 
  )
}

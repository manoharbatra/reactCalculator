import './App.css';
import React, {useState} from 'react';
import { clear } from '@testing-library/user-event/dist/clear';


function App() {

  const [result,setResult] = useState('');

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
    setResult('');
  }

  const calculate=()=>{
    setResult(eval(result).toString())
  }

    return (
    <div className="calc">
       <input type="text" placeholder='0' id="answer" value={result}/>
       <input type="button" value="9" class="button" onClick={clickHandler}/>
       <input type="button" value="8" class="button" onClick={clickHandler}/>
       <input type="button" value="7" class="button" onClick={clickHandler}/>
       <input type="button" value="6" class="button" onClick={clickHandler}/>
       <input type="button" value="5" class="button" onClick={clickHandler}/>
       <input type="button" value="4" class="button" onClick={clickHandler}/>
       <input type="button" value="3" class="button" onClick={clickHandler}/>
       <input type="button" value="2" class="button" onClick={clickHandler}/>
       <input type="button" value="1" class="button" onClick={clickHandler}/>
       <input type="button" value="0" class="button" onClick={clickHandler}/>
       <input type="button" value="." class="button" onClick={clickHandler}/>
       <input type="button" value="+" class="button" onClick={clickHandler}/>
       <input type="button" value="-" class="button" onClick={clickHandler}/>
       <input type="button" value="*" class="button" onClick={clickHandler}/>
       <input type="button" value="/" class="button" onClick={clickHandler}/>
       <input type="button" value="%" class="button" onClick={clickHandler}/>
       <input type="button" value="Clear" class="button button1" onClick={clearDisplay}/>
       <input type="button" value="=" class="button button1" onClick={calculate}/>
    </div>
  );
}

export default App;

import {useState} from "react";
import ReactDOM from "react-dom/client";

// Styles
import './App.css';

// Components
import Headerxxx from './Components/Header';

 function Counter() {
     const [counter, setcounter] = useState(null);
     const [count, setcount] = useState(null);
     const [updated, setUpdated] = useState(counter);
     const [changed, setchanged] = useState(count);
     const [answer, setanswer] = useState(0);

     const reset =() => {
         setcounter(0)
         setcount(0)
         setUpdated(0)
         setchanged(0)
         setanswer(0)
     }
     const changefirstValue = (event) => {
         setcounter(event.target.value);
     }
     const changesecondValue = (event) => {
         setcount(event.target.value);
     }
     const firstClick = () => {
         setUpdated(+counter);
     };
     const secondClick = () => {
         setchanged(+count);
     };
     const sumNumbers = () => {
         setanswer(updated + changed)
     }
     const minusNumbers = () => {
         setanswer(updated - changed)
     }
     const bajanumNumbers = () => {
         setanswer(updated * changed)
     }
     const bazmapaykumNumbers = () => {
         setanswer(updated / changed)
     }
     return (
         <div className="counter">
             <Headerxxx text='Calculator' color='red' />
             <Headerxxx text='Calculator2' color='green' />
             {/*first input*/}
             <input
                 type = "number"
                 name="counter"
                 onChange={changefirstValue}
                 value={counter}
             />
             {/*second input*/}
             <input
                 type = "number"
                 name="counter"
                 onChange={changesecondValue}
                 value={count}
             />
             <h2>Number one: {updated} <br/> Number two: {changed}</h2>
             <span className="counter__output">{answer}</span>
             <div className="btn__container">
                 <button className="control__btn"  onClick={firstClick}>get first number</button>
                 <button className="control__btn"  onClick={secondClick}>get second number</button>
                 <button className="control__btn"  onClick={sumNumbers}>+</button>
                 <button className="control__btn"  onClick={minusNumbers}>-</button>
                 <button className="control__btn"  onClick={bajanumNumbers}>*</button>
                 <button className="control__btn"  onClick={bazmapaykumNumbers}>/</button>
                 <button className="reset" onClick={reset}>Reset</button>
             </div>
         </div>
     )
 }
 const root = ReactDOM.createRoot(document.getElementById('mydiv'));
 root.render(<Counter/>);



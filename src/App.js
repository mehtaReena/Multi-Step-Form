import { useState } from "react";
import './styles.css'

function App() {
  let [curr, setCurr] = useState(1);
  let [state,setState] = useState(1);
  return (
    <div className="container">
      <div className="card">
        <div className="left">
        <div className="options" >
        <div className="circle">1</div>  Choose title
             </div>

            <div className="options"  style={{opacity: state<2 ? '.2':''}}>
               <div className="circle">2</div>  Choose description
            </div >


            <div className="options" style={{opacity: state<3 ? '.2':''}}>
            <div className="circle">3</div>  Confirm data
            </div>

        </div>
        {curr === 1 && (
          <div className="right">
            <p>Choose title</p>
            <button onClick={() => {setCurr(2);setState(2);}}>Submit Title</button>
          </div>
        )}
        {curr === 2 && (
          <div className="right">
            <p>Choose description</p>
            <div>
              <button onClick={() => {setCurr(1);setState(1);}}>Back</button>
              <button onClick={() => {setCurr(3);setState(3);}}>Submit Description</button>
            </div>
          </div>
        )}
        {curr === 3 && (
          <div className="right">
            <p>Are you happy now?</p>
            <div>
              <button onClick={() => {setCurr(2);setState(2);}}>No go back</button>
              <button onClick={() => {setCurr(4);setState(4);}}>Yes go ahead</button>
            </div>
          </div>
        )}
        {curr === 4 && (
          <div className="right">
            <p>Okay we are done.Thank you for submitting the data!!!</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;

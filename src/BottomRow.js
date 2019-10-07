import React, {useState} from "react";
import "./App.css";
import { whileStatement } from "@babel/types";


const BottomRow = () => {

  const [quarterNum, setQuarter] = useState(1);
  const [fieldNum, setField] = useState(50);
  const [downNum, setDown] = useState(1);
  const [yardsNum, setYards] = useState(10);

  

  return (
    <div><div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNum}</div>
      </div>

      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsNum}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{fieldNum}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNum}</div>
      </div>
     
     </div>
        <div className= "newButtonsContainer">
          <button 
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setField(fieldNum < 50 ? fieldNum + 1 : fieldNum)}>
              Ball On +
          </button>
          <button 
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setField(fieldNum <= 50 ? fieldNum - 1 : fieldNum)}>
              Ball On -
          </button>
          <button 
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setQuarter(quarterNum < 4 ? quarterNum + 1 : quarterNum)}>
              Quarter
          </button>
          <button 
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setDown(downNum < 4 ? downNum + 1 : downNum)}>
              Down
          </button>
          <button  
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setYards(yardsNum < 100 ? yardsNum + 1 : yardsNum)}>
              Yards +
          </button>
          <button 
            className= "awayButtons__fieldGoal newButtons" 
            onClick ={() => setYards(yardsNum <= 100 ? yardsNum - 1 : yardsNum)}>
              Yards -
          </button>
        </div>
      </div>
  );
};

export default BottomRow;

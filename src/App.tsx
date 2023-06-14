import React, { useState } from 'react';
import s from './App.module.css';

import { Button } from './Button';
const maxCount = 5
function App() {
    let [counter,setCounter]=useState(0)
    const Count=()=>{
        setCounter(counter+1)

    }
    const Reset=()=>{
        setCounter(0)
    }
    return(
        <div className={s.content}>
           <div className={s.conteiner}>
              <div className={(counter===maxCount?s.error:'') + ' '+s.counter}>{counter}</div>
              <div className={s.buttons}>
                  <Button name={"inc"} callBack={Count} counterState={counter>=maxCount}/>
                  <Button name={"reset"} callBack={Reset} counterState={counter===0}/>
               </div>
            </div>
        </div>
    )
}

export default App;





























import React, { useState } from 'react';

function App() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0)
  const [prob, setProb]= useState(5)

// useState(0) - по деструктуризации присваетвает значение count равное значению указанного в скобках

  return(
    //событие onClick через setCount присваивает новое заначение {count}//
    <div className='plan'>
      <p>Логика выставления планов компании Добрада <br /> <br />{count} %</p>
      <p>привет {prob}</p>
      <button onClick={()=>setProb(prob+20)}>click</button>
      <button onClick={()=>setCount(count+50)}>Нажав на меня узнаешь прирост на след месяц</button>
    </div>
  )
}
export default App

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button style={{ margin: '10px' }} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button style={{ margin: '10px' }} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => dispatch(incrementByAmount(33))}
      >
        Increment by 33
      </button>
    </div>
  );
}

export default App;

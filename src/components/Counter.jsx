import React, {useEffect ,useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncrementbtnClick = () => {
    setCount(count + 1);
  } 
  const Decrementbtnclick = () => {
    setCount(count - 1 );
  } 
  useEffect(() => {
    console.log("The count is:", count);
  }, [count]);

  return (
    <div>
      <p>The button has been clicked {count} times</p>
      <button onClick={IncrementbtnClick}>Increment </button>
      <button onClick={Decrementbtnclick}>Decrement</button>
    </div>
  );
};

export default Counter;

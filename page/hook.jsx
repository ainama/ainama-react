import React, { useState, useEffect, useReducer } from 'react';

// demo 1
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <p>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </p>
  );
}

// demo 2
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={ () => dispatch({ type: 'decrement' }) }>-</button>
      <button onClick={ () => dispatch({type: 'increment' }) }>+</button>
    </>
  );
}


export default function Hook() {
  // state setState
  const [count, setCount] = useState(0);

  // componentDidMount componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // add listener
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      // remove listener
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }), [];

  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick={ () => setCount(count + 1) }>
        set title
      </button>

      <Counter initialCount = { 50 } />

      <Counter2 />

    </div>
  );
}

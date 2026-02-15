import React from 'react';
import Cart from './components/Cart';
import {data} from './data';

function App() {
  return (
    <div className="App">
      {data.map(user => (
        <Cart key={user.id} item={user} />
      ))}
    </div>
  );
}

export default App;

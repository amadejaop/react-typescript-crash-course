import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {

/*   const [number, setNumber] = useState(5);

  const changeNumber = () => {
    setNumber(true);
  } */

  const [people, setPeople] = useState<IState["people"]>([]);

/* people.map(person => {
  person.note
}); */

  return (
    <div className="App">
      <h1>People invited to my Party</h1>

    </div>
  );
}

export default App;

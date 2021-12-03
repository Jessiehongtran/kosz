import React, { useState } from 'react';
import './App.css';
import Pinterest from './components/pinterest';

interface AppProps {
  text: string;
  name?: string
}

interface User {
  name: string,
  age: number,
  country: string,
  address: {
    street: string,
    number: number,
    zip: string
  },
  admin: boolean
}

export default function App({ text, name= "there" }: AppProps) {

  // const [user, setUser] = useState<User | null>(null);

  // const fetchUser = () => {
  //   setUser({
  //     name: "Mitchell",
  //     age: 23,
  //     country: "the Netherlands",
  //     address: {
  //       street: "Main st.",
  //       number: 88,
  //       zip: "21345"
  //     },
  //     admin: false
  //   })
  // }

  return (
    <div className="App">
      {/* KOSZ
      <p>{text}</p>
      <p>Hello {name}!</p>
      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>} */}
      <Pinterest />
    </div>
  );
}


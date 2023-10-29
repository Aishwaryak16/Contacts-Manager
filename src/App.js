
import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './Components/ContactList';
import Form from './Components/Form';
import Header from './Components/Header';
import uuid4 from 'uuid4';

function App() {
  const localStorageKey = "list";

  const [list, setList] = useState(()=>{
    
    return JSON.parse(localStorage.getItem(localStorageKey))
  || []});

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(list))
  }, [list])

  const addContact = (data) => {
    console.log(data, 'from App.js');
    setList([...list, {id: uuid4(), data}]);
  }

  const removeContact = (id) => {
    const updatedList = list.filter((val)=>{
      return val.id!== id;
    })

    setList(updatedList);
  }
  return (
    <div className="App">
      <Header/>
      <Form addcontact = {addContact}/>
      <ContactList List = {list} removeContact = {removeContact}/>
    </div>
  );
}

export default App;

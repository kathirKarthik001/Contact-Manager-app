import React, { useState ,useEffect } from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import Contactlist from './Contactlistmenu';
import Author from './Author';

function App() {
  const [contacts, setContacts] = useState(()=>{
    const localValues = localStorage.getItem('CONTACTS')
    if(localValues == null){
      return []
    }
    else{
      return JSON.parse(localValues)
    }
  });

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    // Filter out the contact with the specified id
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
  };



  
  return (
    <div className='ui container'>
      <Header />
      <Addcontact onAddContact={handleAddContact} />
      <Contactlist contacts={contacts} deleteContact={deleteContact} />
      <Author/>
      

    </div>
  );
}

export default App;

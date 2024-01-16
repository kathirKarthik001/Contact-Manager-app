import React, { useState ,useEffect } from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import Contactlist from './Contactlistmenu';
import Contactcard from './Contactcard';
import Author from './Author';

import { BrowserRouter  , Routes , Route } from 'react-router-dom';


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
      <BrowserRouter>

      <Header />

      <Routes>

      <Route path='/' 
       Component={() => <Contactlist contacts={contacts} deleteContact={deleteContact}/>}/>
      <Route path='/add'  Component={()=><Addcontact onAddContact={handleAddContact} />}/>
      <Route path={`/contacts/:id`} 
      Component={Contactcard}></Route>
      

      </Routes>

      <Author/>
      </BrowserRouter>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from '../api/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Addcontact from './Addcontact';
import Editcontact from './Editcontact ';
import Contactlist from './Contactlistmenu';
import Contactcard from './Contactcard';
import Author from './Author';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleAddContact = async (newContact) => {
    const response = await axios.post('/contacts', newContact);
    setContacts([...contacts, response.data]);
  };

  const handleEditContact = async (editedContact) => {
    await axios.put(`/contacts/${editedContact.id}`, editedContact);

    const updatedContacts = contacts.map((contact) => {
      if (contact.id === editedContact.id) {
        contact.name = editedContact.name;
        contact.email = editedContact.email;
      }
      return contact;
    });

    setContacts(updatedContacts);
  };

  const searchHandler = (searchInput) => {
    setSearchTerm(searchInput);
    if (searchInput !== '') {
      const filteredContacts = contacts.filter((contact) =>
        Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setSearchResult(filteredContacts);
    } else {
      setSearchResult(contacts);
    }
  };

  const retrieveContacts = async () => {
    const response = await axios.get('/contacts');
    return response.data;
  };

  useEffect(() => {
    const retrievedContacts = async () => {
      const storedContacts = await retrieveContacts();
      if (storedContacts) setContacts(storedContacts);
    };
    retrievedContacts();
  }, []);

  const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Contactlist
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                deleteContact={deleteContact}
                term={searchTerm}
                searchKey={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<Addcontact onAddContact={handleAddContact} />}
          />
          <Route
            path="/edit/:id"
            element={<Editcontact onEditContact={handleEditContact} />}
          />
          <Route path="/contacts/:id" element={<Contactcard />} />
        </Routes>
        <Author />
      </BrowserRouter>
    </div>
  );
}

export default App;



 // const [contacts, setContacts] = useState(()=>{

  //   const localValues = localStorage.getItem('CONTACTS')
  //   if(localValues == null){
  //     return []
  //   }
  //   else{
  //     return JSON.parse(localValues)
  //   }
  // });

  // useEffect(() => {

  //    localStorage.setItem('CONTACTS', JSON.stringify(contacts));

  // }, [contacts]);

import React, { useState ,useEffect } from 'react';
import './App.css';
import axios from '../api/Contacts'
import Header from './Header';
import Addcontact from './Addcontact';
import Editcontact from './Editcontact '
import Contactlist from './Contactlistmenu';
import Contactcard from './Contactcard';
import Author from './Author';

import { BrowserRouter  , Routes , Route } from 'react-router-dom';


function App() {
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

  const [contacts , setContacts] = useState([])

  const handleAddContact = async (newContact) => {
    const request = newContact
    const response = await axios.post('/contacts',request)
    setContacts([...contacts, response.data]);
  };

  const handleEditContact = async (editedContact) =>{
    const request = editedContact
    const response = await axios.put(`/contacts/${editedContact.id}`, request)

    const updatedcontacts = contacts.map(contact =>{
        if(contact.id === editedContact.id){
           contact.name = editedContact.name
            contact.email = editedContact.email
         }
         })
    setContacts([...contacts])

  }



  // function to retrive the data
  const retriveContacts = async() =>{
    const response = await axios.get('/contacts');
    return response.data;
  }


  // runs at every mounting of the component
  useEffect(()=>{
    const retrivedContacts = async ()=>{
      const storedcontacts = await retriveContacts()
      if(storedcontacts) setContacts(storedcontacts)
    }
  retrivedContacts()
  },[])


  const deleteContact = async(id) => {
    // Filter out the contact with the specified id
    await axios.delete(`/contacts/${id}`)

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
      <Route path={'/edit/:id'}  Component={()=><Editcontact onEditContact={handleEditContact} />}/>
      <Route path={`/contacts/:id`} Component={Contactcard}></Route>
      

      </Routes>

      <Author/>
      </BrowserRouter>

    </div>
  );
}

export default App;

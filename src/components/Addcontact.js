import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addcontact = ({ onAddContact }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '' && email !== '') {
      onAddContact({ id: crypto.randomUUID(), name: name, email: email });

      // Clear the form
      setName('');
      setEmail('');

      // Navigate to the home page
      navigate('/');
    } else {
      alert('Please fill the fields');
    }
  }

  return (
    <div className="ui container main">
      <h2 className='ui medium header'>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label> Name</label>
          <input type="text" name="name" id="" value={name} onChange={e => { setName(e.target.value) }} />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" name="email" id="" value={email} onChange={e => { setEmail(e.target.value) }} />
        </div>

        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default Addcontact;

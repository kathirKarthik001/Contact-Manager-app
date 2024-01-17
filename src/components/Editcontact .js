import React, { useEffect, useState  } from 'react';
import {Link , useNavigate , useLocation } from 'react-router-dom';

const Editcontact = ({ onEditContact }) => {
  const navigate = useNavigate();


  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id')
  const oldname = params.get('name');
  const oldemail = params.get('email');
  


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(()=>{
    setEmail(oldemail)
    setName(oldname)
  },[])

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== '' && email !== '') {
      onEditContact({ id:id , name: name, email: email });

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
          <input type="text" name="name" id="" value={name} onChange={e => { setName(e.target.value ) }} />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" name="email" id="" value={ email} onChange={e => { setEmail(e.target.value) }} />
        </div>

        <button className="ui button blue">Update</button>
        <Link to={'/'}>
        <button className="ui button blue">Cancel</button>
        </Link>
        

      </form>
    </div>
  );
};

export default Editcontact;

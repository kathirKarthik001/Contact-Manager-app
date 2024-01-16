// Contactcard component
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import user from '../images/user.png';

const Contactcard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');
  const email = params.get('email');

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="" />
        </div>
        <div className="content" style={{textAlign:'center'}}>
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
        <div className="ui button outlined" style={{ background: '#F2F2F2' }}>
          <Link to={'/'}> Back to Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;

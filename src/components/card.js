// Card component
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import user from '../images/user.png';

const Card = ({ id, name, email, deleteContact }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/contacts/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
  };

  const editClick = () => {
    navigate(`/edit/${id}?id=${id}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', justifySelf: 'center',cursor:'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={user} alt="img" className="ui avatar image" style={{ marginRight: '10px' }} />
        <div onClick={handleCardClick}>
          <div className="content" style={{ width: '200px', padding: '5px' }}>
            <div className="ui header">{name}</div>
            <div>{email}</div>
          </div>
        </div>
      </div>

    
         <div className="" style={{ alignSelf: 'center' }}>
          <button  onClick={editClick}    className='ui blue basic button' style={{ textAlign: 'center', width: '60px' }}>
          <i className="edit alternate outline icon" style={{ color: 'blue', padding: '6px', height: '20px', paddingTop: '3px' }} />
          </button>
        </div>
     

      <div className="" style={{ alignSelf: 'center' }}>
        <button onClick={deleteContact} className='ui red basic button' style={{ textAlign: 'center', width: '60px' }}>
          <i className="trash alternate outline icon" style={{ color: 'red', padding: '6px', height: '20px', paddingTop: '3px' }} />
        </button>
      </div>
      
    </div>
  );
};

export default Card;

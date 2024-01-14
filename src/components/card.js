import React from 'react';

const Card = ({ name , email , deleteContact}) => {
  return (
    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div >
        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="img" className="ui avatar image" />
      </div>
      <div className="content" style={{ width:'200px',padding:'5px'}}>
        <div className="ui header">{name}</div>
        <div>{email}</div>
      </div>
      <div className="" style={{alignSelf:'center'}}>
        <button onClick={deleteContact} className='ui blue basic button' style={{textAlign:'center',width:'30x'}}>
        <i className=" trash alternate outline icon" style={{ color: 'blue',padding:'6px',height:'20px',paddingTop:'3px' }} />
        </button>
      </div>
    </div>
  );
};

export default Card;

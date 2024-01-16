import React from "react";
import Card from "./card";
import { Link } from "react-router-dom";


const Contactlist =({contacts , deleteContact}  ) =>{
  
   const deletepress= (id)=>{
    const decision = window.confirm('Shall we delete the contact ?');
    if(decision){
      deleteContact(id)
    }
   }


    const render = () => {
        return contacts.map(contact => (
          <Card key={contact.id} name={contact.name} email={contact.email} deleteContact={() =>deletepress(contact.id)}  />
        ));
      };

      return(

        <>
          
         <div className="ui medium header" style={{display:'flex',alignItems:'flex-start',justifyContent:'space-evenly' }}>
               <h2>Contact List</h2>
                <Link to={'/add'}>
                <button className="ui button blue right">
                Add contact
                </button>
                </Link>
               
            </div>
          <div className="ui celled list " style={{paddingTop:'10px' , display:'flex' , flexDirection:'column-reverse' }}>
            {/* conditonal rendering */}
             
            <div style={{textAlign:"center"}}>                               
            {contacts.length === 0 && " No contacts added yet"}
            </div>
            
            {render()}
        </div>
        
        
        </>
        
    )

    }
  


  export default Contactlist



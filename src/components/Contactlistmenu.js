import React from "react";
import Card from "./card";


const Contactlist =({contacts , deleteContact}) =>{

    const render = () => {
        return contacts.map(contact => (
          <Card key={contact.id} name={contact.name} email={contact.email} deleteContact={() => deleteContact(contact.id)} />
        ));
      };

      return(
        <div className="ui celled list" style={{paddingTop:'40px', borderTop:'2px solid grey'}}>
            <div className="ui medium header"> Contact list </div>

            {/* conditonal rendering */}
             
            <div style={{textAlign:"center"}}>                               
            {contacts.length === 0 && " No contacts added yet"}
            </div>
            
            {render()}
        </div>
    )

    }




export default Contactlist;
import React from "react";
import Card from "./card";


const Contactlist =({contacts}) =>{
    
    const render = ()=>{
        return(
           contacts.map((contact) =>{
            <Card key={contact.id} name={contact.name} email={contact.email} />
           }) 
        );
    }

    return(
        <div className="ui celled list">
            {render()}
        </div>
    )
}




export default Contactlist;
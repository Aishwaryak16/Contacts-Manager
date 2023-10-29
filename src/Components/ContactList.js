import React from 'react';
import '../App.css';

const ContactList = (props) => {
const {List, removeContact} = props;

    console.log(List, 'list from contactlist');
    const contactList = List.map((val)=>{
        return (
            <div className='list-wp'>
                <div className='list'>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <div>{val.data.phone}</div>
                </div>

            <p className='delete' onClick={()=>removeContact(val.id)}>DELETE</p>
            </div>
        )
    })
  return (
    <>
    <h2>Contact List</h2>
    <div>{contactList}</div>
      
    </>
  )
}

export default ContactList;

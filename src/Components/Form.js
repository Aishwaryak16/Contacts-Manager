import React, { useState } from 'react';
import '../App.css';

const Form = ({addcontact}) => {

    const [data, setData] = useState({name: '', email: '', phone: ''});

const handleChange = (e) => {
    if(e.target.name === 'name') {
        setData({...data, name: e.target.value});
    }

    else if(e.target.name === 'email') {
        setData({...data, email: e.target.value});
    }

    else if(e.target.name === 'phone') {
        setData({...data, phone: e.target.value});
    }
}

const collectData = (e) => {
e.preventDefault();

   console.log(data);
   addcontact(data);
   setData({name: '', email: '', phone: ''})
 }

  return (
    <>
      <h2>Share your details here!!</h2>

      <form>
        <div><input className='form-field' type='text' placeholder='enter your name' name='name' value={data.name} onChange={handleChange} required/></div>
        <div><input className='form-field' type='email' placeholder='enter your email id' name='email' value={data.email} onChange={handleChange} required/></div>
        <div><input className='form-field' type='number' placeholder='enter your contact number' name='phone' value={data.phone} onChange={handleChange} required/></div>
        <button type='submit' onClick={collectData}>Add Contact</button>
      </form>
    </>
  )
}

export default Form;

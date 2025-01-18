import React, { useState } from "react";

function getInitialData(IP_ADDRESS) {
  return {
    email: "",
    password: "",
    ipAddress: IP_ADDRESS,
    isRemember: false,
  };
}


const IP_ADDRESS = '192.168.1.1';

const Component = () => {
  const [login, setLogin] = useState(() => getInitialData(IP_ADDRESS));

  
  
  const handleInputChange = (event) => {
    const { value, name, checked } = event.target;
    console.log(value, name, checked);

    if(name === 'isRemember') {
        setLogin({ ...login, [name]: checked });        
    } else {
        setLogin({ ...login, [name]: value });
    }
  }

  const handleSubmit = () => {

  }

  let { email, password, isRemember } = login;

  return (
    <>
      <div>My Login Component</div>
      <form>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleInputChange} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        <label>Remember Me</label>
        <input checked={isRemember} type="checkbox" name="isRemember" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Login</button>
      </form>
      <div style={{ marginTop: '25px' }}>{JSON.stringify(login)}</div>
    </>
  );
};

export default Component;

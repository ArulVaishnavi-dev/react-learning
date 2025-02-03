import { useState } from "react";

export default function Login() {

  const [enteredValues , setEnteredValues] = useState({
    email:"",
    password:""
  });
  const [editValues , setEditValues] = useState({
    email:false,
    password:false
  });

  function handleFormSubmit(event){
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier,value)
  {
    setEnteredValues(prevValues=>({
      ...prevValues,
      [identifier]:value
    })
    );
    setEditValues(prevValues=>({
      ...prevValues,
      [identifier]:false
    })
    );
  }

  function handleInputBlur(identifier)
  {
    setEditValues(prevValues=>({
      ...prevValues,
      [identifier]:true
    })
    );
  }
  const emailIsInvalid = editValues.email && !enteredValues.email.includes('@');

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          onBlur={(event)=>handleInputBlur('email')}
          onChange={(event)=>handleInputChange('email',event.target.value)} 
          value = {enteredValues.email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>} </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={event=>handleInputChange('password',event.target.value)}
            value = {enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

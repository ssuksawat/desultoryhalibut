import React from 'react';

const LoginComponent = ({setAppStateOnChange, login, loginValues}) => {
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Login</h4>
        <div className="input-field">
          <input type="text" name="username" 
            value={ loginValues.username } 
            placeholder="Username" 
            onChange={ setAppStateOnChange }
          />
          <input type="password" name="password" 
            value={ loginValues.password } 
            placeholder="Password" 
            onChange={ setAppStateOnChange } 
          />
        </div>
      </div>
      <div className="modal-footer">
        <a 
          href="#!" 
          onClick={ login } 
          className=" modal-action modal-close waves-effect waves-green btn-flat">Login
        </a>
      </div>
    </div>
  );
}

export default LoginComponent;
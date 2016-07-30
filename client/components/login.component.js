import React from 'react';

const LoginComponent = ({setAppStateOnChange, login, loginValues}) => {
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Login</h4>
        <div className="input-field">
          <input type="text" name="username" value={loginValues.username} placeholder="Username" onChange={ function(value){console.log('hi: ', value) }} />
          <input type="password" name="password" value={loginValues.password} placeholder="Password" onChange={ setAppStateOnChange } />
          <input type="password" name="confirmPassword" value={loginValues.confirmPassword} placeholder="Confirm Password" onChange={ setAppStateOnChange } />
      </div>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  );
}

export default LoginComponent;
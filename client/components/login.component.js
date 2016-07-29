import React from 'react';

const LoginComponent = ({setAppStateOnChange, login}) => {
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Login</h4>
            <input type="text" name="username" placeholder="Username" onChange={ setAppStateOnChange }>
            <input type="password" name="password" placeholder="Password" onChange={ setAppStateOnChange }>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={ setAppStateOnChange }>
        </div>
        <div class="modal-footer">
          <a href="#!" onClick={ login } class="modal-action modal-close waves-effect waves-green btn-flat">Login</a>
        </div>
      </div>
      );
  }
}

exports default LoginComponent;
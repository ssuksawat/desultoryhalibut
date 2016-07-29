import React from 'react';

const Signup = ({setAppStateOnChange, signup, loginValues}) => {
  render() {
    return (
      <div id="modal2" class="modal">
        <div class="modal-content">
          <h4>Signup</h4>
            <input type="text" name="username" value={signupTextVal} placeholder="Username" onChange={ setAppStateOnChange }>
            <input type="password" name="password" placeholder="Password" onChange={ setAppStateOnChange }>
            <input type="text" name="fullName" placeholder="Name" onChange={ setAppStateOnChange }>
            <input type="email" name="email" placeholder="Email" onChange={ setAppStateOnChange }>
        </div>
        <div class="modal-footer">
          <a href="#!" onClick={ signup } class=" modal-action modal-close waves-effect waves-green btn-flat">Signup</a>
        </div>
      </div>
      );
  }
}
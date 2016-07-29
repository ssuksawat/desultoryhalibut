import React from 'react';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange(event) {
    this.setState({
      event.target.name: event.target.value
    })
  }


  login() {
    if (this.state.password !== this.state.confirmPassword) {
      // for now:
      alert('Passwords do not match')
      return;
    }
    
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        this.state.username,
        this.state.password,
      }),
    })
      .then(response => {
        // cache the token in local storage, using the user id as the key
        window.localStorage.setItem(response.body.user.id, response.body.token)
      })
  }
 

  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Login</h4>
            <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={ this.handleChange }>
            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={ this.handleChange }>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={ this.handleChange }>
        </div>
        <div class="modal-footer">
          <a href="#!" onClick={ this.login } class=" modal-action modal-close waves-effect waves-green btn-flat">Login</a>
        </div>
      </div>
      );
  }
}
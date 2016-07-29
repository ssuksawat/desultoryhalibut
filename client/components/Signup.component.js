import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      fullName: '',
      email: '',
    }
  }

  handleChange(event) {
    this.setState({
      event.target.name: event.target.value
    })
  }

  login() {
    fetch('/api/auth/signup', {
      method: 'POST',
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
          <h4>Signup</h4>
            <input type="text" placeholder="Username" onChange={ this.handleChange }>
            <input type="password" placeholder="Password" onChange={ this.handleChange }>
            <input type="text" placeholder="Name" onChange={ this.handleChange }>
            <input type="email" placeholder="Email" onChange={ this.handleChange }>
        </div>
        <div class="modal-footer">
          <a href="#!" onClick={ this.login } class=" modal-action modal-close waves-effect waves-green btn-flat">Signup</a>
        </div>
      </div>
      );
  }
}
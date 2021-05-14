import { Component } from 'react';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Почта</span>
            <input
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Пароль</span>
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginView;

import { Component } from 'react';

class RegisterView extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Имя</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
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

export default RegisterView;

import { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
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
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

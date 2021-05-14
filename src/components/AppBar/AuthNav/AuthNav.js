import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AuthNav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/register">Регистрация</NavLink>
        <NavLink to="/login">Логин</NavLink>
      </div>
    );
  }
}

export default AuthNav;

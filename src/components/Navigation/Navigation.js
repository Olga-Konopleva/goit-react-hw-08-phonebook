import { React, Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" exact>
          Главная
        </NavLink>
        <NavLink to="/contacts" exact>
          Мои контакты
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;

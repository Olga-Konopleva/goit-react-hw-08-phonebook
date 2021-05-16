import { React, Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAutendicated } from '../../redux/auth/auth-selectors';

class Navigation extends Component {
  render() {
    const { isAutenticated } = this.props;
    return (
      <nav>
        <NavLink to="/" exact>
          Главная
        </NavLink>
        {isAutenticated && (
          <NavLink to="/contacts" exact>
            Мои контакты
          </NavLink>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAutenticated: getAutendicated(state),
});

export default connect(mapStateToProps)(Navigation);

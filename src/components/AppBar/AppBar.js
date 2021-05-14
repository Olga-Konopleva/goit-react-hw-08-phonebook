import { React, Component } from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

class AppBar extends Component {
  render() {
    return (
      <header>
        <Navigation />
        {false ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

export default AppBar;

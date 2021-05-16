import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import { getCurrentUser } from './redux/auth/auth-operations';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

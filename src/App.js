import { Component } from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

class App extends Component {
  render() {
    return (
      <container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
        </Switch>
      </container>
    );
  }
}

export default App;

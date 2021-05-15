import { Component } from 'react';
import { connect } from 'react-redux';
import { getName } from '../redux/auth/auth-selectors';

class HomeView extends Component {
  render() {
    return <h1>Привет, {this.props.name}! </h1>;
  }
}

const mapStateToProps = state => ({
  name: getName(state),
});

export default connect(mapStateToProps)(HomeView);

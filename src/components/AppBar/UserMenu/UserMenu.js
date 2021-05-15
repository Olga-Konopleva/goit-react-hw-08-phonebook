import { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';
import { getEmail } from '../../../redux/auth/auth-selectors';

class UserMenu extends Component {
  render() {
    const { email, onLogout } = this.props;

    return (
      <div>
        <p>{email}</p>
        <button type="button" onClick={onLogout}>
          Выйти
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: getEmail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

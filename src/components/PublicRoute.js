import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getAutendicated } from '../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAutenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAutenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuntenticated: getAutendicated(state),
});

export default connect(mapStateToProps)(PublicRoute);

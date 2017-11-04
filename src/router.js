import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import UserList from "./pages/UserList";
import CustomerList from "./pages/CustomerList";
import Navigation from "./Navigation";
import Login from "./pages/Login";
import PropTypes from "prop-types";

const NoMatch = props => {
  return (
    <div>
      {" "}page not found, click me back to <Link to="/">home page</Link>
    </div>
  );
};

const isLogin = () => localStorage.getItem("isLogin") === "1";

/**
 * 需要登录才能进入的路由包装
 * @param Component
 * @param rest
 * @returns {XML}
 * @constructor
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                /* eslint-disable */
                state: { from: props.location }
                /* eslint-enable */
              }}
            />
          );
        }
      }}
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func
};

/**
 * 需要登录才能进入的路由包装(喊导航头)
 * @returns {XML}
 * @constructor
 */
const NavigationRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin()) {
          return (
            <div>
              <Navigation {...props} />
              <Component {...props} />
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                /* eslint-disable */
                state: { from: props.location }
                /* eslint-enable */
              }}
            />
          );
        }
      }}
    />
  );
};
NavigationRoute.propTypes = {
  component: PropTypes.func
};

class AppRouter extends React.Component {
  componentDidMount() {
    console.log("didMount");
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Login} path="/login" exact />
            <NavigationRoute path="/userList" component={UserList} exact />
            <NavigationRoute
              path="/customerList"
              component={CustomerList}
              exact
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;

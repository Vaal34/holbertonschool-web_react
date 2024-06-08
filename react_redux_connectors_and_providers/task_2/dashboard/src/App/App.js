import React from "react";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import { AppContext, userLogout, logoutUser } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { PropTypes } from "prop-types"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userLogout,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ]
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleLogIn(email, password){
    this.setState({ user: {
      email: email,
      password: password,
      isLoggedIn: true,
    }})
  }

  handleLogout = () => {
    this.setState({
      user: userLogout,
    });
  };

  markNotificationAsRead(id) {
    const updatedNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: updatedNotifications });
  }

  render() {
    const { user } = this.state;
    const { displayDrawer } = this.props;
    const { isLoggedIn } = user;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.handleLogout }}>
          <Notifications
            displayDrawer={displayDrawer}
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login onSubmitLogin={this.handleLogIn} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>

          <BodySection title="News from the School">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          </BodySection>

          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
  },
  appFooter: {
    borderTop: '#E0354B solid 3px',
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: logoutUser,
  displayDrawer: false,
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

function mapStateToProps(state){
  return{
    isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
    displayDrawer: state.uiReducer.get('isNotificationDrawerVisible')
  }
}

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

export { mapStateToProps };
export default App;

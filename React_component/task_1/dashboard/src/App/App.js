import React from "react";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import propTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() }},
    ];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn = true } = this.props;
    
    let componentBody;
    if (isLoggedIn === false) {
      componentBody = <Login />;
    } else {
      componentBody = <CourseList listCourses={this.listCourses} />;
    }

    return (
      <>
        <Notifications displayDrawer={true} listNotifications={this.listNotifications}/>
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {componentBody}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func
};

App.defaultProps = {
  logOut: () => {},
  isLoggedIn: false
};

export default App;

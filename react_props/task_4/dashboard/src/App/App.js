import React from "react";
import Notifications from "../Notifications/Notifications"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Login from "../Login/Login"
import "./App.css"
import propTypes from "prop-types"
import CourseList from "../CourseList/CourseList";

function App({isLoggedIn = true}) {

  App.propTypes = {
    isLoggedIn: propTypes.bool
  }

  let componentBody;
  if(isLoggedIn == false){
    componentBody = <Login />
  } else {
    componentBody = <CourseList />
  }

  return (
    <>
      <Notifications />
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

export default App;

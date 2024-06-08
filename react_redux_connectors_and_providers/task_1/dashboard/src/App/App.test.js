import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App, { mapStateToProps } from './App.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import { StyleSheetTestUtils } from 'aphrodite';
import { getLatestNotification } from '../utils/utils.js';
import { fromJS } from 'immutable';

const mockStore = configureStore([]);

describe('App Component', function() {
  let store;
  let initialState;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();

    initialState = {
      uiReducer: fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: false,
      }),
    };
    store = mockStore(initialState);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', function() {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should have the default state for displayDrawer set to false', function() {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    expect(wrapper.props().displayDrawer).toBe(false);
  });

  it('should update the state correctly when markNotificationAsRead is called', function() {
    const mockNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    wrapper.setState({ listNotifications: mockNotifications });

    const idToMarkAsRead = 1;
    wrapper.instance().markNotificationAsRead(idToMarkAsRead);
    const updatedNotifications = wrapper.state('listNotifications');
    const markedNotification = updatedNotifications.find(notification => notification.id === idToMarkAsRead);

    expect(markedNotification).toBeUndefined();
  });

  it('should render Notifications component', function() {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should render Footer component', function() {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should render Login component when user is not logged in', function() {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should render CourseList component when user is logged in', function() {
    initialState = {
      uiReducer: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive().dive();
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('should trigger logOut and alert "Logging you out" on pressing control+h', () => {
    const events = {};
    const logout = jest.fn();
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();

    shallow(
      <Provider store={store}>
        <App logOut={logout} />
      </Provider>
    );

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});

describe('mapStateToProps', () => {
  it('should return the correct state from uiReducer', () => {
    const state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

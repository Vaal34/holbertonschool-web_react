import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notification Composant displayDrawers is true', function(){

    let listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }},
    ];

    it('should Notifications renders without crashing', function(){
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
        expect(wrapper.exists()).toBe(true)
    });

    it('should renders the text <<Here is the list of notifications>>', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
    });

    it('should Notifications is being displayed when displayDrawer is true', function(){
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
        expect(wrapper.find('.Notifications').exists()).toBeTruthy();
    });
    
    it('should menuItem is being displayed when displayDrawer is true', function(){
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });

    it('renders correctly with an empty array or without listNotifications property', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
        expect(wrapper.contains('No new notification for now')).toEqual(true);
    });

    it('renders list of notifications correctly with the right number of NotificationItem', () => {
        
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find(NotificationItem).length).toEqual(listNotifications.length);
    });

    it('does not display "Here is the list of notifications" message when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.contains('No new notification for now')).toEqual(true);
    });
});

describe('Notification Composant displayDrawers is False', function(){

    let listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }},
    ];

    it('should menu item is being displayed when displayDrawer is false', function(){
        const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications}/>)
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });
    
    it('should Notifications is not being displayed when displayDrawer is false', function(){
        const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications}/>)
        expect(wrapper.find('.Notifications').exists()).toBeFalsy();
    });
});
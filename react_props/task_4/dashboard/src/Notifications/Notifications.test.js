import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notification Composant displayDrawers is true', function(){
    it('should Notifications renders without crashing', function(){
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.exists()).toBe(true)
    });

    it('should render Notification have list of 3 elements', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find(NotificationItem).length).toEqual(3);
    });
    
    it('should renders the text <<Here is the list of notifications>>', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });

    it('should Notifications is being displayed when displayDrawer is true', function(){
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.find('.Notifications').exists()).toBeTruthy();
    });
    
    it('should menuItem is being displayed when displayDrawer is true', function(){
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });
});

describe('Notification Composant displayDrawers is False', function(){
    it('should menu item is being displayed when displayDrawer is false', function(){
        const wrapper = shallow(<Notifications displayDrawer={false}/>)
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });
    
    it('should Notifications is not being displayed when displayDrawer is false', function(){
        const wrapper = shallow(<Notifications displayDrawer={false}/>)
        expect(wrapper.find('.Notifications').exists()).toBeFalsy();
    });
});
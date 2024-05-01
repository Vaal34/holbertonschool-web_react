import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';

describe('App Composant', function(){
    it('should App renders without crashing', function(){
        const wrapper = shallow(<App />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should Notifications renders without crashing', function(){
        const wrapper = shallow(<Notifications />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should Footer renders without crashing', function(){
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should Login renders without crashing', function(){
        const wrapper = shallow(<Login />)
        expect(wrapper.exists()).toBe(true)
    })
})
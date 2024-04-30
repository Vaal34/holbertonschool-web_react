import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Notification Composant', function(){
    it('should Footer renders without crashing', function(){
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists()).toBe(true)
    });

    it('should have the text Copyright', function(){
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('p').text()).toContain("Copyright")
    })
});
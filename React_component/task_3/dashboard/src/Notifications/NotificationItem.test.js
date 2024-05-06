import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should renders correct props value in HTML', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('should renders correct html prop', () => {
    const html = { __html: '<u>unittest</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
  });

  it('should calls markAsRead with the correct ID when clicked', () => {
    const id = 34;
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem type="default" value="test" markAsRead={mockMarkAsRead} />);
    wrapper.simulate('click', id);
    expect(mockMarkAsRead).toHaveBeenCalledWith(id);
    jest.restoreAllMocks();
  });
}); 
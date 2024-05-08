import React from "react"
import { shallow } from "enzyme"
import BodySection from "./BodySection"
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom"

describe("BodySectionWithMarginBottom Component", function(){

    it('renders BodySection component and passes props correctly', () => {
        const title = 'test title';
        const childrenText = 'test children node';
        const wrapper = shallow(
          <BodySectionWithMarginBottom title={title}>
            <p>{childrenText}</p>
          </BodySectionWithMarginBottom>
        );
    
        const bodySection = wrapper.find(BodySection);
        
        expect(bodySection.exists()).toBeTruthy();
    
        expect(bodySection.props().title).toEqual(title);
        expect(bodySection.props().children).toEqual(<p>{childrenText}</p>);
      });
})
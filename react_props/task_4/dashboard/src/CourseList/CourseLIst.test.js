import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('Composant CourseList', function(){

    const wrapper = shallow(<CourseList />) 
    
    it('should no crashing', function(){
        expect(wrapper.exists()).toBeTruthy();
    })

    it('should  renders the 5 different rows', function(){
        expect(wrapper.find(CourseListRow).length).toEqual(5)
    })
})
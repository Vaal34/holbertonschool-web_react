import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css"
import CourseShape from "./CourseShape";
import propTypes from "prop-types"

export function CourseList({listCourses}){

    CourseList.propTypes = {
        listCourses: propTypes.arrayOf(propTypes.shape(CourseShape))
    };
    
    CourseList.defaultProps = {
        listCourses: []
    };

    return(
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
                {listCourses && listCourses.length !== 0 ? (
                    listCourses.map(course => (
                        <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit}/>
                    ))
                ) : (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    )
};

export default CourseList;
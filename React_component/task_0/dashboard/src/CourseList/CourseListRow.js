import React from "react";
import propTypes from 'prop-types';

export function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}){
        
    CourseListRow.propTypes = {
        isHeader: propTypes.bool,
        textFirstCell: propTypes.string.isRequired,
        textSecondCell: propTypes.string || propTypes.number,
    }

    if(isHeader == true){
        if(textSecondCell == null){
            return(<tr><th className="hColSpan2" colSpan={2}>{textFirstCell}</th></tr>)
        } else {
            return(
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return(
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    };
};

export default CourseListRow
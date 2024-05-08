import React from "react";
import propTypes from 'prop-types';

export function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}){
        
    CourseListRow.propTypes = {
        isHeader: propTypes.bool,
        textFirstCell: propTypes.string.isRequired,
        textSecondCell: propTypes.string || propTypes.number,
    }

    const rowStyle = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab'
    };

    if(isHeader == true){
        if(textSecondCell == null){
            return(<tr style={{rowStyle}}><th className="hColSpan2" colSpan={2}>{textFirstCell}</th></tr>)
        } else {
            return(
                <tr style={rowStyle}>                    
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return(
            <tr style={rowStyle}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    };
};

export default CourseListRow
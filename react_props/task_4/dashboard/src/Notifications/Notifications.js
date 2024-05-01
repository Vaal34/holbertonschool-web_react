import React from 'react';
import "./Notifications.css"
import { getLatestNotification } from '../utils/utils'; 
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import propTypes from "prop-types"

const Notifications = ({displayDrawer = true }) => {

    Notifications.proptypes = {
        displayDrawer: propTypes.bool
    }

    const closeClick = () => {
        console.log("Close button has been clicked");
    };

    return(
        <div className='compNotification'>
            <div className='menuItem'><p>Your notifications</p></div>
            { displayDrawer && (
            <div className='Notifications'>
                <button
                onClick={closeClick}
                aria-label="Dismiss"
                style={{ 
                    cursor: 'pointer',
                    backgroundColor: 'transparent', 
                    border: 'none',
                    float: 'right',
                }}>
                    <img src={closeIcon} alt="close" width={10}></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                </ul>
            </div>
            )}
        </div>
    )
}

export default Notifications
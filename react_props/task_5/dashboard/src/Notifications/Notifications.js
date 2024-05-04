import React from 'react';
import "./Notifications.css"
import { getLatestNotification } from '../utils/utils'; 
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import propTypes, { bool } from "prop-types"
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({displayDrawer = false, listNotifications}) => {

    Notifications.propTypes = {
        listNotifications: propTypes.arrayOf(propTypes.shape(NotificationItemShape)),
        displayDrawer: propTypes.bool
    }


    Notifications.defaultProps = {
        listNotifications: [],
        displayDrawer: false,
    };

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
                {listNotifications && listNotifications.length !== 0 ? (
                    listNotifications.map(notification => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                    ))
                ) : (
                    <p>No new notification for now</p>
                )}
                </ul>
            </div>
            )}
        </div>
    )
}

export default Notifications
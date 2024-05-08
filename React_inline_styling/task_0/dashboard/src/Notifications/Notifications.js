import React from 'react';
import "./Notifications.css"
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import propTypes from "prop-types"
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
        this.closeClick = this.closeClick;
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    closeClick = () => {
        console.log("Close button has been clicked");
    };
    render(){
        const { displayDrawer, listNotifications } = this.props;

        return(
            <div className='compNotification'>
            <div className='menuItem'><p>Your notifications</p></div>
            { displayDrawer && (
            <div className='Notifications'>
                <button
                onClick={this.closeClick}
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
                        <NotificationItem 
                            key={notification.id} 
                            type={notification.type} 
                            value={notification.value} 
                            html={notification.html}
                            markAsRead={this.markAsRead}
                            id={notification.id}
                        />
                    ))
                ) : (
                    <p>No new notification for now</p>
                )}
                </ul>
            </div>
            )}
        </div>
        );
    };
};

Notifications.propTypes = {
    listNotifications: propTypes.arrayOf(propTypes.shape(NotificationItemShape)),
    displayDrawer: propTypes.bool
};

Notifications.defaultProps = {
    listNotifications: [],
    displayDrawer: true,
};

export default Notifications
import React from 'react';
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import propTypes from "prop-types"
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

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
            <div className={css(styles.CompNotification)}>
            <div className={css(styles.ParagraphemenuItem)}><p>Your notifications</p></div>
            { displayDrawer && (
            <div className={css(styles.Notifications)}>
                <button className={css(styles.ButtotncompNotification)}
                onClick={this.closeClick}
                aria-label="Dismiss"
                style={{ 
                    cursor: 'pointer',
                    backgroundColor: 'transparent', 
                    border: 'none',
                    float: 'right',
                }}>
                    <img className={css(styles.ImgagecompNotification)} src={closeIcon} alt="close" width={10}></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                {listNotifications && listNotifications.length !== 0 ? (
                    listNotifications.map(notification => (
                    <li
                        key={notification.id}
                        className={css(
                        notification.type === 'default' && styles.liDefault,
                        notification.type === 'urgent' && styles.liUrgent
                        )}
                    >
                        <NotificationItem 
                            key={notification.id} 
                            type={notification.type} 
                            value={notification.value} 
                            html={notification.html}
                            markAsRead={this.markAsRead}
                            id={notification.id}
                        />
                        </li>
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

const styles = StyleSheet.create({
    
    Notifications: {
        border: 'dotted 2px #E0354B',
        padding: '1% 0% 0% 3%'
    },
    liUrgent: {
        color: 'red'
    },
    liDefault: {
        color: 'blue'
    },

    CompNotification: {
        position: 'absolute',
        top: '0',
        right: '0',
        marginRight: '20px',
        width: '380px',
    },

    ParagraphemenuItem: {
        marginBottom: '5px',
        textAlign: 'right'
    },

    ImgagecompNotification: {
        height: '8px',
        width: 'auto'
    },

    ButtotncompNotification : {
        padding: '0',
        marginRight: '3%',
        marginTop: '1%'
    }

})

export default Notifications
import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";
import { StyleSheet } from "aphrodite";

function NotificationItem({ type, html, value, markAsRead, id }) {
    return (
      <li className={css(styles.notifications,
          type === 'default' && styles.liDefault,
          type === 'urgent' && styles.liUrgent
        )}
       onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};


const styles = StyleSheet.create({
  liUrgent: {
      color: 'red'
  },
  liDefault: {
      color: 'blue'
  },
})
export default React.memo(NotificationItem);

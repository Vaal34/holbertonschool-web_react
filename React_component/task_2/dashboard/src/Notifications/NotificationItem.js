import React from "react";
import propTypes from "prop-types"

function NotificationItem({type, html, value, markAsRead, id}) {

    return (
      <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    );
}

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string
  }),
  markAsRead: propTypes.func,
  id: propTypes.number
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};

export default NotificationItem;
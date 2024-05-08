import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value, markAsRead, id }) {
    return (
      <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
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

export default React.memo(NotificationItem);

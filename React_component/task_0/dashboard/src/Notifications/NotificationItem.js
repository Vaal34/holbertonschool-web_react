import React from "react";
import propTypes from "prop-types"

function NotificationItem({type, html, value}) {

  NotificationItem.propTypes = {
    type: propTypes.string,
    value: propTypes.string,
    html: propTypes.shape({
      __html: propTypes.string
    })
  };

    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    );
  }
  
export default NotificationItem;
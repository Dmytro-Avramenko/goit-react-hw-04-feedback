import PropTypes from "prop-types"

export function Notification({ message }) {
  return <h2 className="notification">{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
}






// import PropTypes from "prop-types"

// export const Notification = ({ message }) => {
//   return <h2 className="notification">{message}</h2>;
// };

// Notification.propTypes = {
//   message: PropTypes.string.isRequired
// }

const Notification = (props) => {
  const { name, url, className } = props;
  return (
    <div className={`message-conatiner ${className}`}>
      <img className="icon" src={url} />
      <p className="message">{name}</p>
    </div>
  );
};

const element = (
  <div>
    <div className="content-conatiner">
      <h1 className="main-heading">Notifications</h1>
      <div className="notification-container">
        <Notification
          name="Information Message"
          className="information"
          url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          name="Success Message"
          className="success"
          url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          name="Warning Message"
          className="warning"
          url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          name="Error Message"
          className="error"
          url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

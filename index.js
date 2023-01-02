const Notification = (props) => {
  //  Write your code here.
  const { imageUrl, className, imageText } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img src={imageUrl} className="icon" />
      <p className="message">{imageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Notifications</h1>
      <div className="">
        <Notification
          className="primary-icon"
          imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          imageText="Information Message"
        />
        <Notification
          className="success-icon"
          imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          imageText="Success Message"
        />
        <Notification
          className="warning-icon"
          imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          imageText="Warning Message"
        />
        <Notification
          className="danger-icon"
          imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          imageText="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

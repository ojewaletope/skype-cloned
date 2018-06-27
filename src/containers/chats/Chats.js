import React from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.chatRefs = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatRefs.current.scrollTop = this.chatRefs.current.scrollHeight;
  };
  render() {
    return (
      <div className="Chats" ref={this.chatRefs}>
        {this.props.messages.map(message => {
          return <Chat message={message} key={message.number} />;
        })}
      </div>
    );
  }
}

export default Chats;

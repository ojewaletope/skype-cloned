import React from "react";
import store from "../../store";
import { setTypingValue, sendMessage } from "../../actions";
import "./MessageInput.css";
import activeuserId from "../../reducers/activeUserId";

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
    // console.log(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeuserId));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Message__input"
        onInput={handleChange}
        value={value}
        placeholder="write message"
      />
    </form>
  );
};

export default MessageInput;

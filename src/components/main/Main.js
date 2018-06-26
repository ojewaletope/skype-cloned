import React from "react";
import "./Main.css";
import EmptyScreen from "../empty/EmptyScreen";
import ChatWindow from "../chatwindow/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <EmptyScreen user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow user={user} activeUserId={activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;

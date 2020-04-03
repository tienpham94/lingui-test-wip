import React from "react";
import { Trans, Plural } from "@lingui/macro";

const Inbox = ({
  messages = ["a", "b"],
  markAsRead,
  user = {
    name: "Tien",
    lastLogin: Date.now()
  }
}) => {
  const messagesCount = messages.length;
  const { name, lastLogin } = user;

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>

      <p>
        <Trans>Hello {name}</Trans>
      </p>

      <p>
        <Trans>
          See all <a href="/unread">unread messages</a>
          {" or "}
          <a onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        <Plural
          value={messagesCount}
          one="There's # message in your inbox"
          other="There're # messages in your inbox"
        />
      </p>

      <footer>Last login on {lastLogin}.</footer>
    </div>
  );
};

export default Inbox;

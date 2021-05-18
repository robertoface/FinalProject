import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import css from "./ChatInput.module.css";
import { MDBInput } from "mdbreact";
import { ChatIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function ChatInput(props) {
  // const [userName, setUserName] = useState("");
  const { user } = useAuth0();
  //console.log(user);
  const personName = user.name;
  const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();

    //const isUserProvided = user && user !== "";
    const isMessageProvided =
      message && message !== " " && message.length !== 0;
    if (isMessageProvided) {
      props.sendMessage(personName, message);
    } else {
      alert("Please insert an user and a message.");
    }
    setMessage("");
  }

  function handleChange(e) {
    e.preventDefault();
    const isMessageProvided = message && message !== "" && message.length !== 0;
    if (isMessageProvided) {
      props.sendTyper(personName, message);
      setTimeout(function () {
        props.sendTyper(null);
      }, 10000);
    }
    setMessage(e.target.value);
  }

  return (
    <div className={css.chatInputContainer}>
      <form>
        <h5>{personName} </h5>

        <MDBInput
          className={css.inputField}
          type="textarea"
          label="Type notification..."
          rows="2"
          icon="pencil-alt"
          value={message}
          onChange={handleChange}
        />
        <Button
          onClick={handleClick}
          leftIcon={<ChatIcon />}
          className={css.submitButton}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;

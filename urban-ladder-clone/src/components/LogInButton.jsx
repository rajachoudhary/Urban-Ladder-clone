import React from "react";
import { Button } from "react-bootstrap";
import { LogModal } from "./LogModal";

export const LogInButton = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <LogModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

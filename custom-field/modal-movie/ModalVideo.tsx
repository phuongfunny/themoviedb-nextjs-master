import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalVideo = (props: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="play_video" onClick={toggle}>
        <FontAwesomeIcon icon={faPlay} size="lg" fixedWidth />
        <Modal isOpen={modal} toggle={toggle} className="modal_play_video">
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <iframe
              src={`https://www.youtube.com/embed/${props.key_id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default ModalVideo;

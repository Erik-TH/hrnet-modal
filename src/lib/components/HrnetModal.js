import React from "react";
import "./HrnetModal.css";

const HrnetModal = ({ openModal, setOpenModal, hrnetModalMessage }) => {
  const content = (
    <>
      {openModal ? (
        <div className="hrnetModal">
          <div className="hrnetModal__wrapper">
            <div className="hrnetModal__content">
              <p className="hrnetModal__content--message">
                {hrnetModalMessage}
              </p>
            </div>

            <div className="hrnetModal__btn">
              <button
                aria-label="Close Modal"
                onClick={() => setOpenModal((toggle) => !toggle)}
                className="btn__hrnetModal--close"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  return content;
};

export default HrnetModal;

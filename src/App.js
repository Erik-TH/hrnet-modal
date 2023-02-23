import { useState } from "react";

import HrnetModal from "./lib/components/HrnetModal";

function App() {
  const [openHrnetModal, setOpenHrnetModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenHrnetModal((toggle) => !toggle);
  };

  const hrnetModalMessage = "Test message - hrnetModalMessage";

  const content = (
    <div className="container">
      <button onClick={handleModal}>Open modal</button>

      <HrnetModal
        openModal={openHrnetModal}
        setOpenModal={setOpenHrnetModal}
        hrnetModalMessage={hrnetModalMessage}
      ></HrnetModal>
    </div>
  );

  return content;
}

export default App;

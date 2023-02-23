import { useState } from "react";

import HrnetModal from "./lib/components/HrnetModal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenModal((toggle) => !toggle);
  };

  const hrnetModalMessage = "Test message - hrnetModalMessage";

  const content = (
    <div className="container">
      <button onClick={handleModal}>Open modal</button>

      <HrnetModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        hrnetModalMessage={hrnetModalMessage}
      />
    </div>
  );

  return content;
}

export default App;

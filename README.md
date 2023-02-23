# hrnet-modal
Modal dialog component for ReactJS
## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-modal
    $ yarn add react-modal

To use hrnet-modal in a React app:

   - In a react app, import the component: 
   `import { hrnetModal } from "hrnet-modal"`

   - Props:
```
      <HrnetModal
        openModal={openHrnetModal}
        setOpenModal={setOpenHrnetModal}
        hrnetModalMessage={hrnetModalMessage}
      />
```
openModal: if true the modal is shown and hidden if false.
setOpenModal: toggle the state of the modal - set openModal to true or false.
hrnetModalMessage: String of the modal's message

## Exemple
Here is  a simple example of hrnet-modal being used:
```
import { useState } from "react";
import ReactDOM from 'react-dom';
import HrnetModal from "./HrnetModal";

function App() {
  const [openHrnetModal, setOpenHrnetModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenHrnetModal((toggle) => !toggle);
  };

  <!-- Customize your message -->
  const hrnetModalMessage = "Test message - hrnetModalMessage";

  const content = (
    <div className="container">
      <button onClick={handleModal}>Open modal</button>

      <HrnetModal
        openModal={openHrnetModal}
        setOpenModal={setOpenHrnetModal}
        hrnetModalMessage={hrnetModalMessage}
      />
    </div>
  );

  return content;
}

ReactDOM.render(<App />, appElement);
```
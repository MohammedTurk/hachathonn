import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow((prev) => !prev);
  }
  return {
    show,
    handleShow,
  };
};

export default useModal;

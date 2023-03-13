import { createPortal } from "react-dom";

export const OverlayPortal = ({ children, show, handleClick, className }) => {
  let classes = `bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 flex items-center justify-center ${
    className ?? ""
  }`;

  return show
    ? createPortal(
        <div onClick={handleClick} className={classes}>
          {children}
        </div>,
        document.querySelector("#Overlay")
      )
    : null;
};

export default OverlayPortal;

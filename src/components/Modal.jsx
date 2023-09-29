import { useGlobalContext } from "../utils/context"
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
        <div className="modal-container">
          <button type="button" className="close-modal-btn" onClick={() => closeModal()}><FaTimes /></button>
          <h3>Modal Content</h3>
        </div>
    </div>
  )
}

export default Modal
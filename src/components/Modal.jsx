import { useGlobalContext } from "../utils/context"

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? 'modal-window show' : 'modal-window hide'}>
      <div className="overlay">
        <div className="modal">
          <button type="button" className="close-modal-btn" onClick={() => closeModal()}>X</button>
          <div className="modal-header"><h3>Promo</h3></div>
          <div className="modal-body"><h4>30% SPECIAL DISCCOUNT</h4></div>
        </div>
      </div>
    </div>
  )
}

export default Modal
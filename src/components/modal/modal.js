import './modal.css';

function Modal(props) {
  const { show, setShowModal, name, setCurrentProduct } = props
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClose = () => {
    setShowModal(!show)
    setCurrentProduct()
  }

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <span id='closeModal' type="button" onClick={handleClose}>
          &times;
        </span>
        <p>
         Thank you for updating the product <strong>{name} </strong>
        </p>
      </div>
    </div>
  );
};
export default Modal
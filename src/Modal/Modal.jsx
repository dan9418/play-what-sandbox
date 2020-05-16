import ReactDOM from 'react-dom';

const Modal = ({ closeModal, children }) => {
    const el = document.getElementById('stage');
    const content = (
        <div className='modal-backdrop'>
            <Viewers.UI.ButtonInput onClick={closeModal} className="modal-close">X</Viewers.UI.ButtonInput>
            <div id="modal" >{children}</div>
        </div>
    );
    return ReactDOM.createPortal(content, el);
};

export default Modal;
import React from "react";
import Button from "../button/Button";


const Modal = ({onClose = () => {}, children}) => {

    return (
        <div className="wrapper">
            <div className="modal">
                <p className="modal__text">No momento esse conteúdo não está disponível, por favor volte mais tarde</p>
                <button onClick={onClose} className="form-container__btn modal__btn">
                    <a>{children}</a>
                </button>
            </div>
        </div>
        
    )
}

export default Modal;
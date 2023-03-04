import React from 'react'
import style from "../styles/Modal.module.css"
const Modal = ({ children, openModal, CloseModal }) => {
  return (
    <div className={style.modal_container} style={{ display: openModal ? "grid" : "none" }}>
      <div className={style.modal_body}>
        <button className={style.modal_close} onClick={() => CloseModal()}>X</button>
        {children}
      </div>

    </div>
  )
}

export default Modal
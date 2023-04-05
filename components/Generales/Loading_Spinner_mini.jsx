import React from 'react'
import style from "../styles/Loading_Spinner_mini.module.css"


const Loading_Spinner_mini = () => {
  return (
    <div className="spinner-container">
      <div className={style.loading_spinner_mini}>
      </div>
    </div>
  )
}

export default Loading_Spinner_mini;
import React from "react";
import style from "../styles/spinner.module.css"

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className={style.loading_spinner}>
      </div>
    </div>
  );
}
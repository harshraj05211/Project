import React from 'react'
import Logo from "../assets/Logo.png";
import styles from "./loading.module.scss";
import BarLoader from "react-spinners/BarLoader";


function Loading(props) {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo" />
      <BarLoader
        color="#c07e2b"
        loading={props.loading}
        width={300}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading;

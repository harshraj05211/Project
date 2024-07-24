import React from 'react'
import style from "./greeting.module.scss";

function Greetings() {
  return (
    <div className={style.container}>
       <div className={style.wave}>
            <p>Hello, Harsh👋</p>
       </div>
       <div className={style.para}>
         <p>All your notes are here, in one place!</p>
       </div>
    </div>
  )
}

export default Greetings

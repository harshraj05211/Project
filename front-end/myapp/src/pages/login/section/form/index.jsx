import React, { useState } from 'react'
import SignIn from '../../../Partials/SignIn'
import SignUp from '../../../Partials/SignUp'
import style from "./form.module.scss"

function Form() {
    const [active, setActive] = useState("signin");
  return (
    <div className={style.container}>
        {(active==="signin") ? <SignIn /> : <SignUp handleSwitch={() => setActive("signin")} />}
        {
            (active==="signin") ?
            <p className={style.span}>Create an account? <span onClick={() => setActive("signup")}>SignUp</span></p> :
            <p className={style.span}>Already Registered? <span onClick={() => setActive("signin")}>SignIn</span></p>
        }
        
    </div>
  )
}

export default Form

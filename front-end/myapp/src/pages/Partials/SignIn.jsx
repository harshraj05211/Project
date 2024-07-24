import React, { useState } from "react";
import styles from "./partial.module.scss"
import Logo from "../../assets/Logo.png"
import Google from "../../assets/Google.png"
import Line from "../../assets/line.png"
import Join from  "../../assets/Join.png"
import { toast } from "react-toastify";
import utils from "../../utils/localStorage"
import {useNavigate} from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSignIn(){
        if(!email.length || !password.length) toast.error("Some required fields are empty")
        fetch("http://localhost:3001/api/users/signin", {
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
            method: "POST",
    }).then((res) => res.json()).then((data) => {
        console.log(data);
        if(data?.success === 200)
        {
            toast.success("User logged in successfully");
            console.log(data);
            utils.addToLocalStorage("auth_key", data.token);
            navigate("/dashboard");
        }
        else toast.error(data?.message);
    }).catch(error => {
        console.log(error);
        toast.error("Something went wrong");
    })
    }

    function handleSubmit(e){
        e.preventDefault();
    }
    
    return(
        <section className={styles["form-container"]}>
           <div className={styles.logo}>
            <img src={Logo} alt="logo of note.me" className={styles.logoi}/>
            <button className={styles.login}>
                <span className={styles.span}><img src={Google} alt="Google" /></span>
                <p>Join with google</p>
            </button>
            <img src={Line} alt="line" className={styles.join}/>
           </div>
           <div className={styles.form}>
            <form className={styles.input} onSubmit={handleSubmit}>
                <section className={styles.email}>
                <input type="text" name="email" placeholder="Enter Your Email" className={styles.input1} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Enter Your Password" className={styles.input1} onChange={(e) => setPassword(e.target.value)}/>
                </section>     
                        
                <button className={styles.door} onClick={handleSignIn}>
                    
                        <span><img src={Join} alt="A door" /></span>
                        <p>Join anonymously</p>
                    
                </button>
                
            </form>
           </div>
        </section>
    )
}

export default SignIn;
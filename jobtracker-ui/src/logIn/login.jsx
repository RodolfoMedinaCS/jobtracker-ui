import styles from "./login.module.css"
import {Link} from "react-router-dom";

function login(){

    return(
        <>
            <div className={styles.flexContiner}>
                <div className={styles.loginBox}>

                    <div className={styles.loginInfo}>

                        <div>
                            <div>
                                <label>JobApps</label>
                            </div>
                        </div>

                        <header className={styles.loginHeader}>
                            <span>Hello,</span>
                            <span>Welcome Back</span>
                            <p>Hey, welcome back to your special place</p>
                        </header>

                        <div className={styles.userInput}>
                            <div className={styles.email}>
                                <label>Email</label>
                                <input type="text"/>
                            </div>

                            <div className={styles.password}>
                                <label>Password</label>
                                <input type="text"/>
                            </div>

                            <div className={styles.radioBttn}>
                                <input type="checkbox" id="rememberMe"/>
                                <label htmlFor="rememberMe" >Remember Me</label>
                            </div>
                        </div>



                        <div className={styles.bttns}>
                            <button>Create Account</button>
                            <button>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default login
import styles from "./login.module.css"
import {Link} from "react-router-dom";
import loginImage from "../../svgImages/file.svg"

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
                                <input type="email" placeholder="Email"/>
                            </div>

                            <div className={styles.password}>
                                <input type="password" placeholder="Passwrod"/>
                            </div>

                            <div className={styles.radioBttn}>
                                <input type="checkbox" id="rememberMe"/>
                                <label htmlFor="rememberMe" >Remember Me</label>
                            </div>
                        </div>



                        <div className={styles.bttns}>
                            <Link to={"/register"}>
                                <button>Create Account</button>
                            </Link>
                            <button>Log In</button>
                        </div>
                    </div>
                </div>

                <div class={styles.imgContainer}>
                    <img src={loginImage} alt="login illustration"/>
                </div>
            </div>
        </>
    )
}
export default login
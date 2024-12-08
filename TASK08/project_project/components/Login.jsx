import React from 'react';
import styles from './Login.module.css';
import {useRouter} from 'next/router';
import Create_account from '../pages/create-account';
const Login = () => {
    const router=useRouter();
    const handleCreateAccount=()=>{
        router.push('/');
    };
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h2 className={styles.loginTitle}>JOIN LETTERBOXD</h2>
                <form>
                    <label className={styles.loginLabel} htmlFor="email">Email address</label>
                    <input className={styles.loginInput} type="email" id="email" placeholder="Email address" />
                    <label className={styles.loginlLabel} htmlFor="username">Username</label>
                    <input className={styles.loginInput} type="text" id="username" placeholder="Username" />
                    <label className={styles.loginLabel} htmlFor="password">Password</label>
                    <input className={styles.loginInput} type="password" id="password" placeholder="Password" />
                    <div className={styles.loginCheckboxContainer}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            I’m at least 16 years old and accept the <span className={styles.link}>Terms of Use</span>.
                        </label>
                    </div>
                    <div className={styles.loginCheckboxContainer}>
                        <input type="checkbox" id="privacy" />
                        <label htmlFor="privacy">
                            I accept the <span className={styles.loginLink}>Privacy Policy</span> and consent to the processing of my personal information in accordance with it.
                        </label>
                    </div>
                    <div className={styles.loginRecaptcha}>
                        <input type="checkbox" id="captcha" />
                        <label htmlFor="captcha">I am human</label>
                    </div>
                    <button
                        className={styles.signupButton}
                        type="button"
                        onClick={handleCreateAccount}
                    >
                        SIGN UP
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;

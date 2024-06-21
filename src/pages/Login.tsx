import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <img
          className={styles.mainChild}
          loading="lazy"
          alt=""
          src="/group-2.svg"
        />
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <div className={styles.title}>
            <h1 className={styles.toDoApp}>{`To-Do App `}</h1>
            <div className={styles.helpingYouStay}>
              Helping you stay on track
            </div>
          </div>
          <button className={styles.readMoreWrapper}>
            <div className={styles.readMore}>Read More</div>
          </button>
        </div>
      </div>
      <div className={styles.authContentWrapper}>
        <div className={styles.authContent}>
          <div className={styles.authHeading}>
            <h2 className={styles.helloAgain}>Hello Again!</h2>
            <div className={styles.welcomeBack}>Welcome Back</div>
          </div>
          <form className={styles.authInput}>
            <div className={styles.email}>
              <img
                className={styles.codiconmail}
                alt=""
                src="/codiconmail.svg"
              />
              <input
                className={styles.inputFields}
                placeholder="Email Address"
                type="text"
              />
            </div>
            <div className={styles.password}>
              <img
                className={styles.bxbxsLockAltIcon}
                alt=""
                src="/bxbxslockalt.svg"
              />
              <input
                className={styles.passwordChild}
                placeholder="Password"
                type="text"
              />
            </div>
            <button className={styles.button}>
              <div className={styles.login1}>Login</div>
            </button>
            <div className={styles.forgotPasswordWrapper}>
              <div className={styles.forgotPassword}>Forgot Password</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import styles from "../styles/Login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username , password})
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>SIGN IN</h1>
        <form>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)} type="password" />

            <button onClick={handleClick} disabled={isFetching}>LOGIN</button>
            {error && <div className={styles.error}>Somethind went wrong !!</div>}
            <a href="/">DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a href="/">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;

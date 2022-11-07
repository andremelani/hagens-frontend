import React, {useState} from "react";
import styles from "../styles/Login.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom"



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
            <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

            <button onClick={handleClick} disabled={isFetching}>LOGIN</button>
            {error && <div className={styles.error}>Somethind went wrong !!</div>}
            <Link to="/">DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

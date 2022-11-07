import React, { useState } from "react";
import styles from "../styles/Register.module.scss";
import { useForm } from "react-hook-form";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();


  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await publicRequest.post("/api/auth/register", data);
      console.log(response.data);
      navigate("/login");
    } catch (e) {
      console.log("Preencha todos os campos");
    }
  };

    const changeForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>CREAME MY ACCOUNT</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            name="name"
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={changeForm}
          />
          <input
            {...register("lastName", { required: true })}
            name="lastName"
            type="text"
            placeholder="Last name"
            value={formState.lastName}
            onChange={changeForm}
          />
          <input
            {...register("username", { required: true })}
            name="username"
            type="text"
            placeholder="Username"
            value={formState.username}
            onChange={changeForm}
          />
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={changeForm}
          />

          <input
            {...register("password", { required: true })}
            name="password"
            type="password"
            placeholder="Password"
            value={formState.password}
            onChange={changeForm}
          />
          <input
            {...register("confirmPassword")}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={changeForm}
          />
          <p>
            By creating an account, I conset to the processing of my personal
            data in accordance with the <b>PRIVACT POLICY</b>
          </p>
          <button type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

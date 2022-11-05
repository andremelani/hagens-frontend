import React, { useEffect, useState } from "react";
import styles from "../styles/Register.module.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      password: '',
   
    }
  });

  /*useEffect(() => {
    publicRequest.post("/auth/login", {
      name: name,
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })*/

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>CREAME MY ACCOUNT</h1>
        <form onSubmit={handleSubmit(console.log)}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}

          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: true })}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
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

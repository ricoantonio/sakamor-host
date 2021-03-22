import Head from "next/head";
import styles from "../styles/pages/Login.module.css";
import React, { useState, useContext, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Button from "../components/Button";
import { Stores } from "../store";
import Router from "next/router";

export default function Login() {
  const { state, dispatch, actions } = useContext(Stores);

  const [passVisibility, setPassVisibility] = useState(true);
  const [wrongUser, setWrongUser] = useState(false);

  const toggleVisibility = () => {
    setPassVisibility(!passVisibility);
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      return Router.push("/");
    }
  });
  const onLogin = (values) => {
    fetch(
      `http://10.100.4.116:8229/api/user/login?username=${values.username}&&password=${values.password}`,
      {
        method: "post",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 404) {
          setWrongUser(true);
          console.log(data);
        } else {
          setWrongUser(false);
          actions.userLogin(data);
          Router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setWrongUser(true);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.wrapper}>
        <div className={styles.middle}>
          <img className={styles.img_security} src={"/security.svg"} />
          <div className={styles.border}>
            <div className={styles.border_content}>
              <div className={styles.main_text}>SAKA ARMOR</div>
              {wrongUser ? (
                <div style={{ color: "red" }}>Wrong password or username!</div>
              ) : (
                ""
              )}
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  if (values.username !== "" && values.password !== "") {
                    onLogin(values);
                  } else {
                    setWrongUser(true);
                  }
                }}
              >
                <Form>
                  <Field
                    className={styles.input}
                    id="username"
                    name="username"
                    placeholder="Employee ID"
                  />
                  <div className={styles.grid_pass}>
                    <Field
                      className={styles.input}
                      id="password"
                      name="password"
                      type={passVisibility ? "password" : null}
                      placeholder="Password"
                    />
                    <img
                      onClick={toggleVisibility}
                      className={styles.img_visibility}
                      src={"/visibility.svg"}
                    />
                  </div>
                  <button type="submit" className={styles.button}>
                    <div className={styles.button_text}>Log In</div>
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className={styles.grid_bot}>
            <div className={styles.bot_text}>Forgot Password</div>
            <div className={styles.right_bot_text}>Change Tenant</div>
          </div>
        </div>
      </div> */}
      <div className={styles.middle}>
        <img className={styles.img_security} src={"/security.svg"} />
        <div className={styles.border_content}>
          <div className={styles.main_text}>SAKA ARMOR</div>
          {wrongUser ? (
            <div style={{ color: "red" }}>Wrong password or username!</div>
          ) : (
            ""
          )}
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values) => {
              if (values.username !== "" && values.password !== "") {
                onLogin(values);
              } else {
                setWrongUser(true);
              }
            }}
          >
            <Form>
              <div className={styles.input_text}>Username</div>
              <Field
                className={styles.input}
                id="username"
                name="username"
                placeholder="Employee ID"
              />
              <div className={styles.input_text}>Password</div>
              <Field
                className={styles.input}
                id="password"
                name="password"
                type={passVisibility ? "password" : null}
                placeholder="Password"
              />
              <div className={styles.button_container}>
                <Button submit text={"Log In"} />
              </div>
              <div className={styles.forgot_pass}>Forgot Password?</div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/pages/Login.module.css";
import React, { useState, useContext, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import { Stores } from "../store";
import Router from "next/router";
import { onLogin } from "../helper";
import Link from "next/link";

export default function Login() {
  const { state, dispatch, actions } = useContext(Stores);

  const [passVisibility, setPassVisibility] = useState(true);
  const [wrongUser, setWrongUser] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const toggleVisibility = () => {
    setPassVisibility(!passVisibility);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      return Router.push("/");
    }
  });

  const onLoginClick = (values) => {
    setLoadingModal(true);
    setWrongUser(false);
    onLogin(values)
      .then((data) => {
        if (data.status === 404) {
          setWrongUser(true);
          console.log(data);
          setLoadingModal(false);
        } else {
          setWrongUser(false);
          console.log(data);
          actions.userLogin(data);
          window.location.reload();
          setLoadingModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setWrongUser(true);
        setLoadingModal(false);
      });
  };

  return (
    <>
      {loadingModal ? (
        <Modal>
          <Spinner />
        </Modal>
      ) : null}
      <div className={styles.container}>
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.middle}>
          <div className={styles.border_content}>
            <img className={styles.img_security} src={"/sakamor_logo.png"} />
            <div className={styles.main_text}></div>
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
                  onLoginClick(values);
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
                <Link href={"/forgot"}>
                  <a>
                    <div className={styles.forgot_pass}>Forgot Password?</div>
                  </a>
                </Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

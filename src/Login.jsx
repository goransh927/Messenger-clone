import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
 import { auth, provider } from "./firebase";
import { useStateProviderValue } from "./StateProvider";

function Login() {
  const [{ }, dispatch] = useStateProviderValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
          alt=""
        /> */}
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=70&h=100"/>
        <div className="login__text">
          <h1>Sign in to Messenger</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;

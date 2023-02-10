import { useState } from "react";
import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
  AuthUserWithEmailAndPassword,
} from "../Utils/firebase/firebase.utils";
import { Form, Input } from "./Form.component";
import { Footer } from "../components/Section.component";

const initialUserState = {
  email: "",
  password: "",
};

function SignIn() {
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(initialUserState);
  const { email, password } = userDetails;

  function handleOnChange(e) {
    const { type, value } = e.target;
    switch (type) {
      case "password": {
        return setUserDetails({
          ...userDetails,
          password: value,
        });
      }
      case "email": {
        return setUserDetails({
          ...userDetails,
          email: value,
        });
      }
      default: {
        return;
      }
    }
  }

  const logUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocFromAuth(user);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const { user } = await AuthUserWithEmailAndPassword(email, password);
      createUserDocFromAuth(user);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found": {
          return setError("email does not exist");
        }
        case "auth/wrong-password": {
          return setError("wrong password");
        }
        default: {
          console.log(error);
        }
      }
    }
  }

  return (
    <>
      <div>
        <Form
          title={"Sign in"}
          action={"Sign In"}
          handleClick={logUser}
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <p>Or login with your email</p>
          {error && <p className="txt-red">{error}</p>}
          <Input
            label={"email"}
            type={"email"}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
          <Input
            label={"password"}
            type={"password"}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
          <p> forgot password</p>
        </Form>
      </div>

      <Footer></Footer>
    </>
  );
}
export default SignIn;

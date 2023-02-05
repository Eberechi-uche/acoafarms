import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../Utils/firebase/firebase.utils";
import { Form, Input } from "./Form.component";
import Footer from "./footer.component";
import { SignUp } from "./SignUp.component";
import { useState } from "react";

const initialUserState = {
  email: "",
  password: "",
};

function SignIn() {
  const [userDetails, setUserDetails] = useState({});

  const logUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userData = await createUserDocFromAuth(user);
    console.log(userData);
  };

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
    }
  }

  return (
    <>
      <div>
        <Form title={"Sign in"} action={"Sign In"} handleClick={logUser}>
          <p>Or login with your email</p>
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

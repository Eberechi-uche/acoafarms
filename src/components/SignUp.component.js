import { Input, Form } from "./Form.component";
import Footer from "./footer.component";
import { useReducer, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../Utils/firebase/firebase.utils";

const formFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "firstName": {
      return {
        ...state,
        firstName: action.value,
      };
    }
    case "lastName": {
      return {
        ...state,
        lastName: action.value,
      };
    }
    case "email": {
      return {
        ...state,
        email: action.value,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.value,
      };
    }
    case "confirmPassword": {
      return {
        ...state,
        confirmPassword: action.value,
      };
    }
    case "reset": {
      return formFields;
    }
  }
  throw Error("Unknown action: " + action.type);
}

export function SignUp() {
  const [state, dispatch] = useReducer(reducer, formFields);
  const [error, setError] = useState(null);
  const { firstName, lastName, email, password, confirmPassword } = state;
  const displayName = firstName + " " + lastName;
  let signInError = " none";

  const handleSubmit = async (event) => {
    // const { password, confirmPassword } = state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do no match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      dispatch({ type: "reset" });
      const userData = await createUserDocFromAuth(user, displayName);
      console.log(userData);
    } catch (error) {
      setError(error.message);
      console.log(typeof error.message);
      signInError = error.message;
      // alert(error.message);
    }
  };

  return (
    <>
      <Form
        title={"Sign Up"}
        action={"Sign Up"}
        handleClick={handleSubmit}
        state={"register"}
        handleOnSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {error && <p className="txt-red">{error}</p>}
        <Input
          label={"First name"}
          type={"text"}
          value={firstName}
          onChange={(e) => {
            dispatch({ type: "firstName", value: e.target.value });
          }}
        />
        <Input
          label={"Last name"}
          type={"text"}
          value={lastName}
          onChange={(e) => {
            dispatch({ type: "lastName", value: e.target.value });
          }}
        />
        <Input
          label={"Email"}
          type={"email"}
          value={email}
          onChange={(e) => {
            dispatch({ type: "email", value: e.target.value });
          }}
        />
        <Input
          label={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => {
            dispatch({ type: "password", value: e.target.value });
          }}
        />
        <Input
          label={"Confirm Password"}
          type={"password"}
          value={confirmPassword}
          onChange={(e) => {
            dispatch({ type: "confirmPassword", value: e.target.value });
          }}
        />
      </Form>
      <Footer />
    </>
  );
}

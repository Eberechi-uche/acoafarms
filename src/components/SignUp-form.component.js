import { useReducer } from "react";
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
  const { firstName, lastName, email, password, confirmPassword } = state;
  const displayName = firstName + " " + lastName;
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
      alert(error.message);
    }
  };

  return (
    <>
      <h1>sign up</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label> First Name</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => {
            dispatch({ type: "firstName", value: e.target.value });
          }}
        />
        <label> Last Name</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => {
            dispatch({ type: "lastName", value: e.target.value });
          }}
        />
        <label> Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            dispatch({ type: "email", value: e.target.value });
          }}
        />
        <label> password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            dispatch({ type: "password", value: e.target.value });
          }}
        />
        <label> confirmPassword</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => {
            dispatch({ type: "confirmPassword", value: e.target.value });
          }}
        />
        <button className="btn btn-primary" type="submit">
          sign up
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          {" "}
          reset
        </button>
      </form>
      <h2>{displayName}</h2>
    </>
  );
}

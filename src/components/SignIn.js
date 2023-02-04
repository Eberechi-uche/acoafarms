import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../Utils/firebase/firebase.utils";

import Footer from "./footer.component";
import { SignUp } from "./SignUp-form.component";

function SignIn() {
  const logUser = async () => {
    const { user } = await signInWithGooglePopUp();
    console.log(user);
    const userData = await createUserDocFromAuth(user);
    console.log(userData);
  };
  return (
    <>
      <h1>sign Up or Sign In</h1>
      <button className="btn mg-10 bg-green" onClick={logUser}>
        sign In
      </button>
      <SignUp className="fl"></SignUp>

      <Footer></Footer>
    </>
  );
}
export default SignIn;

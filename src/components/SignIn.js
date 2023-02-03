import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../Utils/firebase/firebase.utils";

import Footer from "./footer";

function SignIn() {
  const logUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const document = await createUserDocFromAuth(user);
  };
  return (
    <>
      <h1>sign Up or Sign In</h1>
      <button className="btn mg-10 bg-green" onClick={logUser}>
        sign In
      </button>
      <Footer></Footer>
    </>
  );
}
export default SignIn;

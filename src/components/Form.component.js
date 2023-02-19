import "../components/component.syles.scss";
import googleIcon from "../assets/icons/google.png";
import { Profile } from "./Profile.component";
import { Link } from "react-router-dom";

export function Form({
  children,
  title,
  action,
  handleClick,
  onSubmit,
  state,
}) {
  return (
    <>
      <div className="form">
        <h4> {title}</h4>
        {state !== "register" && (
          <div onClick={handleClick} className="fl">
            <Profile image={googleIcon}></Profile>
          </div>
        )}

        <form onSubmit={onSubmit}>
          {children}
          <button className=" btn-round bg-dark btn-fill">{action}</button>
        </form>
        <div className="fl fl-center pd-10"></div>
        {state === "register" ? (
          <Link to="/sign-in" className="link">
            <p>
              already have an account ?
              <span className="text-primary"> sign in</span>
            </p>
          </Link>
        ) : (
          <Link to="/register" className="link">
            <p>
              Don't have an account ?
              <span className="text-primary"> create an account</span>
            </p>
          </Link>
        )}
      </div>
    </>
  );
}

export function Input({ label, type, value, onChange }) {
  return (
    <>
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={label}
        className="input"
      />
    </>
  );
}

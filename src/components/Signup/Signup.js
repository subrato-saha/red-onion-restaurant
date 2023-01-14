import React from "react";
import logo from "../../images/logo2.png";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container-fulid login-page">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <div className="login-info">
        <form>
          <div class="mb-3">
            <input
              type="name"
              class="form-control p-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control p-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control p-3"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control p-3"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary p-3">
              Sign Up
            </button>
          </div>
        </form>
        <NavLink to="/login" className="text-center d-block m-3">
          Already have an account
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;

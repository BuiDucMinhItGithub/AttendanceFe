import React from 'react';
import axios from 'axios';

function Login() {

  const LoginProcess = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/auth/login", 
      {
            username : e.target.elements.username.value,
            password : e.target.elements.password.value
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH"
        },
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        if(response.status === 200){
            
        }
        console.log(response);
      });
  };
  return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={LoginProcess}>
            <div className="Auth-form-content" >
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="ussername" name="username"
                  className="form-control mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password" name='password'
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                {/* Forgot <a href="#">password?</a> */}
              </p>
            </div>
          </form>
        </div>
  )
}

export default Login
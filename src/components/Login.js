import React from "react";
// import '../style/Login.css';



const Login = () =>{
    return(

      <div>
      <div id="customer-form" class="card form-card glass-effect w-450">
        <div class="card-body">
          <h3 class="card-title text-center " style={{ color: "blue" }}>
            Helpy Moto
          </h3>
          <form id="login">
            <div class="mb-2">
              <input
                type="text"
                name="username"
                class="form-control text-center bg-transparent text-white"
                placeholder="Username"
              />
            </div>
            <div class="mb-2">
              <input
                type="text"
                name="Email-id"
                class="form-control text-center bg-transparent text-white"
                placeholder="Email"
              />
            </div>
            <div class="mb-2">
              <input
                type="password"
                name="password"
                class="form-control text-center bg-transparent text-white"
                placeholder="Password"
              />
            </div>
            <div class="mb-2 text-center"></div>
            <div class="mb-2 text-center">
              <a
                id="show-signup"
                class="form-text text-danger fw-bold"
                style={{ color: "blue" }}
              >
                Or Signup
              </a>
            </div>
            <div class="mb-2 text-center">
              <input
                class="btn btn-primary"
                style={{ backgroundColor: "blue"  , width:"90"}}
                type="submit"
                name="submit"
                value="Log In"
                width={20}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
        
    )
}

export default Login
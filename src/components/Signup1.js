import React from 'react'
// import '../style/signup.css';
// import {Link} from 'react-router-dom';


const Signup1 = () => {
  return (
    <div>
      <div className="">
        <div className="container d-flex justify-content-center justify-content-lg-end align-items-center h-100 w-500">
            <div className="card form-card text-center glass-effect       background-color: #201c1c    border: 1px solid rgb(255 196 196);">
                <div className="card-body ">
                    <h3 className="card-title " style={{color:"blue "}}>Registration</h3>
                    <form>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Full Name</label>
                            <input type="text" name="Full-name" className="form-control bg-transparent text-white" placeholder="Enter the Full name"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Email Id</label>
                            <input type="text" name="email-id" className="form-control bg-transparent text-white" placeholder="Email Id"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Password </label>
                            <input type="password" name="password-number"className="form-control bg-transparent text-white" placeholder="Enter Password"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Confirm Password </label>
                            <input type="password" name="password-number"className="form-control bg-transparent text-white" placeholder="Confirm Password"/>
                        </div>
                        <div className="input-group mb-4 ">
                            <label className="input-group-text text-white form-ip">Caption</label>
                            {/* <input type="text" name="caption" className="form-control bg-transparent text-white" placeholder=""/> */}
                        </div>
                        <div className="input-group  h-20"  >
                            {/* <label className="input-group-text text-white form-ip">Caption</label> */}
                            <input type="text" name="caption" className="form-control bg-transparent text-white" placeholder=""/>
                        </div>
                    </form>
                    <input className="btn btn-large btn-block btn-hire mt-3" type="submit" value="Register" style={{color:"black" ,backgroundColor:"blue"
                    }} />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup1

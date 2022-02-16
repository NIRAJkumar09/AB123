import React, {useState} from "react";
import {Link} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Signinvalidation from "./signinvalidation";
import "./signin.css";


function Signin () {
 const [udata,setUdata]=useState({
    uname:'',
    upassword:'',
    ucheck: false
  }
  );
  // onChange event for input fields
  const handleChange=(eve)=>{
    
        setUdata({
           ...udata,
           [eve.target.name]:eve.target.value
        })
  }
  

  const handleCheckbox=(eve)=>{
    debugger;
        setUdata({
           ...udata,
           ucheck: !udata.ucheck
        })
  }
 const [errors,setErrors] = useState({})



  // for submitting data
  const handelSubmit=(eve)=>{
     eve.preventDefault();
      setErrors(Signinvalidation(udata));
    
    
     console.log(uname);
     console.log(upassword);
     console.log(ucheck);
  }
//for eye btn
  const [psd,setShowpsd] = useState(false)
  function toogle(eve){
    eve.preventDefault()
     setShowpsd(
      prevState => !prevState
     )
  }
//destructing state object data
  const {uname,upassword,ucheck} = udata
  
  return (
    <>

      <div className="container-fluid">
        <div className="">
          <div className="row  rowcol-container   ">

            <div className=" col-md-6   col-lg-7">
              <div className="img">
                <div className="logo-img">
                  <img className="img-fluid" src="/Logo.png" alt="logo" />
                </div>
                <h4 className="banner-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <div className="banner-img">

                  <img className="img-fluid" src="/banner.png" alt="banner"/>
                </div>
              </div>
            </div>

            <div className=" col-lg-5 col-md-6  sign-container">
              <div className="border shadow p-3  bg-white   sign-border-container">
                <h4 className="mx-3">Sign in</h4>
                <form className="form-container  mx-3">
                  <div className="form-group  form-uname ">
                    <label htmlFor="uname"></label>
                    <input type="text"
                      className="form-control mb-3"
                      onChange={handleChange}
                      value={uname} id="uname"
                      placeholder="User Name"
                      name="uname" />
                      {errors.uname && <small className="text-danger m-0 p-0">{errors.uname}</small> }
                  </div>
                  <div className="form-group  d-flex  ">
                    <label htmlFor="password"></label>
                    <input type={psd ? 'text':'Password'}
                      className="form-control rounded-right-0 "
                      value={upassword}
                      onChange={handleChange}
                      id="pwd"
                      placeholder="Password"
                      name="upassword" />
                       <button className="show-psd d-block"
                        onClick={toogle}>
                          {psd?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                          </button> 
                       
                      
                  </div>
                  {errors.upassword && <small className="text-danger ">{errors.upassword}</small> }
                  <div className="remember-me">

                    <div className="form-check">
                      <input className="form-check-input"
                        type="checkbox"
                        id="check"
                        value={ucheck}
                        onChange={handleCheckbox}
                        name="ucheck"
                        type="checkbox" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        <small> Remember Me</small>
                      </label>
                      <span className="float-right">
                        <Link className="text-secondary" to="/forgetpsw"><small>Forget Password?</small></Link>
                      </span>
                    </div>


                    <div>

                    </div>
                  </div>

                  <button type="button"
                    onClick={handelSubmit}
                    className="btn btn-primary btn-block mt-3">Sign In</button>
                  <div className="my-2 ">
                    <p className="text-center my-auto horizontal-line">or</p>
                  </div>

                  <div className="border  rounded-lg google-sign">
                    <a href="#">Continue with Google</a>
                  </div>
                  <div className="border rounded-4 mt-3 linkedin-sign">
                    <a href="#"> Continue with Linkedin</a>
                  </div>
                </form>
              </div>
              <div className=" text-center  new-user">
                <span className="">New User? <Link to="/signup">Sign Up</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Signin;

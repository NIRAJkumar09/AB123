import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./ForgetPsw.css";


function Forgetpsw() {
  const [uname, setUname] = useState("")

  const handleChange = (eve) => {

    setUname({
      ...uname,
      [eve.target.name]: eve.target.value
    })
  }

  //applying onclick and fetch post method
  const sendpsd = (eve) => {
    eve.preventDefault();
    console.log(uname)
    fetch('https://', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uname),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  return (
    <>
      <div className="container-fluid" >
        <div className="row  rowcol-container m-5">
          <div className=" col-md-6   col-lg-7 col-sm-6">
            <div className="img">
              <div className="logo-img">
                <img className="img-fluid" src="/Logo.png" alt="logo" />
              </div>
              <h4 className="banner-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
              <div className="banner-img">

                <img className="img-fluid" src="/banner.png" alt="banner" />
              </div>
            </div>
          </div>
          <div className=" col-lg-5 col-md-6 col-sm-6 my-auto  forgetpsw-container ">
            <div className="border  shadow p-4 mb-2 bg-white  forgetpsw-border-container">
              <h4 >Forget Password</h4>
              <form >
                <div className="form-group form-user">
                  <label htmlFor="text"></label>
                  <input type="text"
                    className="form-control rounded-lg"
                    id="uname"
                    placeholder="User Name"
                    onChange={handleChange}
                    name="uname" />
                </div>

                <button onClick={sendpsd}
                  className="btn btn-primary btn-block mb-5 rounded-lg mt-3">Send Password</button>
              </form>

            </div>
            <div className="text-center back-signin">
              <span >Back to<Link to="/">Sign In</Link></span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Forgetpsw;

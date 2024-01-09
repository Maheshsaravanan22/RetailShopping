import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/Login.css";

function Login(){
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  }
 
  return (
    <div>
<section className="gradient-custom">
  <div className="container py-4">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-white text-black" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5">

            <div className="mb-md-3 mt-md-3 pb-3">

              <h2 className="login-text mb-2 text-uppercase text-center">Login</h2>
              <p className="text-black-50 mb-5 text-center">Please enter your email and password!</p>

              <div className="form-outline form-black mb-3">
              <label className='form-label text-uppercase label-text'>Username</label>
                <input type="email"  className="form-control form-control-lg" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text">Password</label>
                <input type="password"  className="form-control form-control-lg" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              </div>

              <p className="small pb-lg-2 text-center"><a className="text-black-50" href="#">Forgot password?</a></p>
              <div className='text-center'>
              <button className="btn btn-lg px-5 btn-login" type="submit" onClick={handleClick}>Login</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
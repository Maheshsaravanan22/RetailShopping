import React from 'react';
import "../CSS/Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-style">
            <div className="container-fluid">
                <a className="navbar-brand" href="/Home">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="/PurchaseOrder">Purchase Order</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="/SupplyOrder">Supply Order</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="/Report">Report</a>
                    </li>
                </ul>
                </div>
            </div>
            <div>
            <div className='text-center'>
              <button className="btn btn-md px-3 btn-logout" type="submit" onClick={handleClick}>Logout</button>
              </div> 
            </div>
        </nav>
    </div>
  )
}

export default Home
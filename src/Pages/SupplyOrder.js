import React from 'react';
import "../CSS/SupplyOrder.css";

function SupplyOrder() {
  return (
    <div>
      <section className="gradient-custom">
  <div className="container py-4">
    <div className="row  justify-content-center align-items-center">

      <div className="col-12 col-md-8 col-lg-6 col-xl-8">
        <div className="card bg-white text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 ">

            <div className="mb-md-3 mt-md-3 pb-3">

              <h2 className="login-text mb-4 text-uppercase">Supply Order</h2>
             <div className='d-flex mx-my-10'>
              <div className='d-block mx-4'>
              <div className="form-outline form-black mb-3">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Product Name</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Product Name' />
              </div>
              <div className="form-outline form-black mb-3">
              <label className="form-label text-uppercase label-text" for="typePasswordX"> Price</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Price' />
              </div>
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Quantity</label>
                <input type="textbox" id="typePasswordX" className="form-control form-control-lg" placeholder='Quantity' />
              </div>
              </div>
              <div className='d-block mx-4'>
            
        
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Total</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Total' />
              </div>
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Mode of Payment</label>
              <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label text-white" for="flexRadioDefault1">
                        Card
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label text-white" for="flexRadioDefault2">
                        Cash
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label text-white" for="flexRadioDefault2">
                        UPI
                    </label>
                    </div>
              </div>
              </div>
              </div>
              <div className="text-center">
              <button className="btn btn-lg px-5 btn-login" type="submit">Submit</button>
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

export default SupplyOrder;
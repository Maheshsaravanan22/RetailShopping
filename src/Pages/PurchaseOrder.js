import React from 'react';
import "../CSS/PurchaseOrder.css";

function PurchaseOrder() {
  return (
    <div>
      <section className="gradient-custom">
  <div className="container py-4">
    <div className="row  justify-content-center align-items-center">

      <div className="col-12 col-md-8 col-lg-6 col-xl-8">
        <div className="card bg-white text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 ">

            <div className="mb-md-3 mt-md-3 pb-3">

              <h2 className="login-text mb-4 text-uppercase">Purchase Order</h2>
             <div className='d-flex mx-my-10'>
              <div className='d-block mx-4'>
              <div className="form-outline form-black mb-3">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Product Name</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Product Name' />
              </div>
        
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Size</label>
              <div>
              <select name="size" id="size" className="dropdown-size">
                <option value="select">Select</option>
                <option value="xs">xs</option>
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
              </select>
              </div>
                            </div>
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Barcode</label>
                <input type="textbox" id="typePasswordX" className="form-control form-control-lg" placeholder='Barcode' />
              </div>
              </div>
              <div className='d-block mx-4'>
              <div className="form-outline form-black mb-3">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Purchase Price</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Purchase Price' />
              </div>
        
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Selling Price</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Selling Price' />
              </div>
              <div className="form-outline form-black mb-4">
              <label className="form-label text-uppercase label-text" for="typePasswordX">Quantity</label>
                <input type="textbox" id="typePasswordX" className="form-control form-control-lg" placeholder='Quantity' />
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

export default PurchaseOrder
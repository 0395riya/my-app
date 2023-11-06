import React, { useEffect, useState } from "react";


export default function Dashboard() {
   
  

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="main-content">
          <div className="page-content">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Rozgar Administrator Control Panel V1.0{" "}
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active"> Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Rozgar Dashboard</p>
                        </div>
                      </div>
                      <div className="col-5 align-self-end">
                        <img
                          src="assets/images/profile-img.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="avatar-md profile-user-wid mb-1">
                          
                           
                        </div>
                        <h5 className="font-size-15 text-truncate">
                          
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          Administrator
                        </p>
                      </div>

                     
                    </div>
                  </div>
                </div>
                
             
               


              


   
              </div>
            </div>
          

          


          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

import React from "react";
import rozgar from '../assets/images/rozgar.png'


const Header = () => {


    return (
        <header id="page-topbar">

            <div className="navbar-header">

                <div className="d-flex" style={{ alignItems: "center" }}>

                    {/* LOGO  */}

                    <div className="navbar-brand-box">

                        {/* className="logo logo-dark" */}

                        <span className="logo-sm">

                            {/* <img src={rozgar} style={{ width: '112px', marginBottom: '5px', marginRight: '92px' }} /> */}

                        </span>

                        <span className="logo-lg" style={{ fontSize: '21px', color: '#9ec035', fontFamily: 'oswald' }}>

                            <span className="" style={{ color: '#fefcac', fonFamily: 'nunito', fontSize: '22px', fontWeight: '700' }}>
                                <img src={rozgar} style={{ width: '112px', marginBottom: '5px', marginRight: '92px' }} />
                            </span>


                        </span>





                        {/* className="logo logo-light" */}

                        <span className="logo-sm">

                            {/* <img src={lightLogo} alt="" height="22" /> */}

                        </span>

                        <span className="logo-lg" style={{ fontSize: '21px', color: '#9ec035', fontFamily: 'oswald' }}>
                            <span title="Rozgar" className="" style={{ color: '#fefcac', fontFamily: 'nunito', fontSize: '22px', fontWeight: '700' }}>
                                {/* <img src={rozgar} style={{ width: '112px', marginBottom: '5px', marginRight: '92px' }} /> */}

                            </span>
                        </span>



                    </div>



                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">

                        <i className="fa fa-fw fa-bars"></i>

                    </button>



                    {/* App Search */}

                    <form className="app-search d-none d-lg-block">

                        <div className="position-relative">

                            <button type="button" className="btn btn-danger" style={{ fontSize: "16px", fontFamily: "Oswald", backgroundColor: "#e81c28", borderColor: "#e81c28" }} id="clearlasttoast">ADMINISTRATION CONTROL PANEL VERSION 1.1.0</button>
                        </div>

                    </form>

                    {/* <div className='statisics-box'>
                        <a>Statistics</a>
                    </div>

                    <div className='statisics-box'>
                        <a>Geo Statistics</a>
                    </div> */}


                </div>



                <div className="d-flex">



                    <div className="dropdown d-inline-block d-lg-none ms-2">

                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"

                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <i className="mdi mdi-magnify"></i>

                        </button>

                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"

                            aria-labelledby="page-header-search-dropdown">



                            <form className="p-3">

                                <div className="form-group m-0">

                                    <div className="input-group">

                                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />

                                        <div className="input-group-append">

                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>

                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">

                        <button type="button" className="btn header-item noti-icon waves-effect"

                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <i className="bx bx-customize"></i>

                        </button>

                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">

                            <div className="px-lg-2">

                                <div className="row g-0">

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="#">

                                            {/* <img src={github} alt="Clients" /> */}

                                            <span>Candidates</span>

                                        </a>

                                    </div>

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="#">

                                            {/* <img src={bitbucket} alt="Employers" /> */}

                                            <span>Employers</span>

                                        </a>

                                    </div>

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="#">

                                            {/* <img src={dribble} alt="Jobs" /> */}

                                            <span>Jobs</span>

                                        </a>

                                    </div>

                                </div>



                                <div className="row g-0">

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="#">

                                            {/* <img src={dropbox} alt="Ads" /> */}

                                            <span>Active ds</span>

                                        </a>

                                    </div>

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="">

                                            {/* <img src={mail_chimp} alt="Admin User" /> */}

                                            <span>Admin User</span>

                                        </a>

                                    </div>

                                    <div className="col">

                                        <a className="dropdown-icon-item" href="#">

                                            {/* <img src={slack} alt="HRMS Subscriptions" /> */}

                                            <span>HRMS Subscriptions</span>

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="dropdown d-none d-lg-inline-block ms-1">

                        <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">

                            <i className="bx bx-fullscreen"></i>

                        </button>

                    </div>



                    <div className="dropdown d-inline-block">


                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"

                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">


                            <i className="bx bx-bell bx-tada"></i>



                        </button>


                    </div>

                    <div class="dropdown d-inline-block">

                        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"

                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/users/avatar-2.jpg" alt="" style={{ width: '40px', height: "40px", objectFit: "cover", borderRadius: "50%" }} />
                            {/* <img src={`${process.env.REACT_APP_BASE_URL}/admin/profile/pic/${pp.PROFILE_PICTURE}`} className="img-thumbnail rounded-circle rounded-circle header-profile-user " style={{ objectFit: "cover" }} /> : <img src="assets/images/users/avatar-2.jpg" alt="" style={{ width: '50px', height: "50px", objectFit: "cover", borderRadius: "50%" }} /> */}

                            <span class="d-none d-xl-inline-block ms-1" key="t-henry">Admin</span>

                            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>

                        </button>

                        <div class="dropdown-menu dropdown-menu-end">
                           <a className='dropdown-item d-block' > <i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                           <a className='dropdown-item d-block' > <i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Update Profile</span></a>
                            <a className='dropdown-item d-block' style={{ cursor: "pointer" }} ><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                            <div class="dropdown-divider"></div>
                            <a className='dropdown-item text-danger'> <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                        </div>

                    </div>
                    <div class="dropdown d-inline-block">

                        <button type="button" class="btn header-item noti-icon waves-effect" onclick="javascript:document.location.href='';">

                            <i class="bx bx-cog bx-spin"></i>

                        </button>

                    </div>



                </div>

            </div>

        </header>
    )
}

export default Header;
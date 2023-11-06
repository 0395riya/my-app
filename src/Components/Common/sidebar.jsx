import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Sidebar = (props) => {

    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>
                        <li className='mm-active'>
                           
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">12</span>
                                <span key="t-dashboards">Dashboards</span>
                            
                        </li>
                        <li className='mm-active'>
                            <Link className="waves-effect" >
                                <i className="bx bxs-user-circle"></i><span className="badge rounded-pill bg-success float-end">22</span>
                                <span key="t-dashboards">Total Candidates</span>
                            </Link>
                        </li>

                        <li className='mm-active'>
                            <Link className="waves-effect" >
                                <i className="bx bx-building-house"></i><span className="badge rounded-pill bg-warning float-end">12</span>
                                <span key="t-dashboards">Total Employers</span>
                            </Link>
                        </li>

                        <li className='mm-active'>
                            <Link className="waves-effect">
                                <i className="bx bxs-notepad"></i><span className="badge rounded-pill bg-primary float-end">341</span>
                                <span key="t-dashboards">Total Jobs</span>
                            </Link>
                        </li>


                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bxs-badge-check"></i><span className="badge rounded-pill bg-danger float-end">341</span>
                                <span key="t-dashboards">Total Ads</span>
                            </Link>
                        </li>


                        <li className='mm-active'>
                            <Link className="waves-effect">
                                <i className="bx bx-list-check"></i><span className="badge rounded-pill bg-success float-end">341</span>
                                <span key="t-dashboards">HRMS Subscribed</span>
                            </Link>
                        </li>

                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bx-barcode"></i><span className="badge rounded-pill bg-info float-end">3</span>
                                <span key="t-dashboards">Job Ads Packages</span>
                            </Link>
                        </li>


                        <li className='mm-active'>
                            <Link className="waves-effect">
                                <i className="bx bx-question-mark"></i><span className="badge rounded-pill bg-warning float-end">1113</span>
                                <span key="t-dashboards">Interview Questions </span>
                            </Link>
                        </li>
                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bxl-blogger"></i><span className="badge rounded-pill bg-info float-end">1113</span>
                                <span key="t-dashboards">Total Blogs </span>
                            </Link>
                        </li>
                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bx-task"></i><span className="badge rounded-pill bg-danger float-end">1113</span>
                                <span key="t-dashboards">Total FAQs  </span>
                            </Link>
                        </li>
                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bx-redo"></i><span className="badge rounded-pill bg-success float-end">1113</span>
                                <span key="t-dashboards">Referred Jobs </span>
                            </Link>
                        </li>
                        <li className='mm-active'>
                            <Link to="" className="waves-effect">
                                <i className="bx bx-user-circle"></i><span className="badge rounded-pill bg-primary float-end">1113</span>
                                <span key="t-dashboards">Government Jobs </span>
                            </Link>
                        </li>

                    

                        <li className="text-danger">
                            <Link to="" className="waves-effect active">
                                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                                <span key="t-chat" className="text-danger">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light p-0">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>QNSea</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#xe-du-lich">Xe du lịch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#dia-diem-an-uong">Địa điểm ăn uống</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#do-an-dac-san">Đồ ăn đặc sản</a>
                        </li>
                    </ul>

                    <button className="btn btn-link text-primary pb-0">
                        <i className="fa fa-facebook-official h2" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;
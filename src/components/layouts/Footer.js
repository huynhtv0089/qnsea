import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
    <>
        <hr className="featurette-divider mb-4" />

        <footer className="container">
            <div className="row">
                <div className="col-sm-6 mr-auto">
                    <h5>Về QNsea</h5>
                    <p>
                        QNSea.com được thành lập với mục đính chính là trang cẩm nang, hướng dẫn về du lịch Thành Phố Quy Nhơn theo tiêu chí ngon bổ rẻ. 
                    </p>
                    <p><span className="font-weight-bold text-dark">Liên hệ:</span> huynhtv0089@gmail.com</p>
                    <small className="d-block mb-3 text-muted">
                        Copyright &copy; 2020 <Link className="text-primary" to="http://www.qnsea.com">QNSea</Link>
                    </small>
                </div>

                <div className="col-sm-4">
                    <h5>Nội dung trang</h5>
                    <ul className="list-unstyled text-small">
                        <li className="pt-2 pb-2">
                            <a className="text-muted" href="#xe-du-lich">Xe du lịch</a>
                        </li>
                        <li className="pt-2 pb-2">
                            <a className="text-muted" href="#dia-diem-an-uong">Địa điểm ăn uống</a>
                        </li>
                        <li className="pt-2 pb-2">
                            <a className="text-muted" href="#do-an-dac-san">Đồ ăn đặc sản</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
)

export default Footer

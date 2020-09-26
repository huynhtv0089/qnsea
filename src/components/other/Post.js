import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => (
    <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Tour</strong>
                <h3 className="mb-0">{props.name}</h3>
                <div className="mb-1 text-muted">{props.createdDate}</div>
                <p className="card-text mb-auto">{props.desc}</p>
                <Link to={'posts/' + props.path} className="stretched-link text-right">Xem thêm &raquo;</Link>
            </div>
        </div>
    </div>
)

export default Post
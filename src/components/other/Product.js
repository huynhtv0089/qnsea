import React from 'react';

const Product = (props) => (
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Giá: {new Intl.NumberFormat().format(props.price)}đ / {props.mass}
                </p>
            </div>
        </div>
    </div>
)

export default Product